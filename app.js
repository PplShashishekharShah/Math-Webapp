(function() {
    // Preload images
    const imagesToPreload = [
        'assets/math-bg-streched_final.webp',
        'assets/question-frame-strched_final.png'
    ];
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    const appEl = document.getElementById('app');
    const promptEl = document.getElementById('prompt');
    const optionsEl = document.getElementById('options');
    const inputContainer = document.getElementById('input-container');

    let currentQuestion = null;
    let isTransitioning = false;

    // ── Grade state ───────────────────────────────────────────────────────────
    // Read initial grade from URL query param (?grade=5).
    // The Starborn game also passes gradeLevel in every getNextQuestion message,
    // which takes precedence over the URL param for dynamic grade switching.
    function clampGrade(value) {
        const n = parseInt(value, 10);
        return Number.isFinite(n) && n >= 3 && n <= 8 ? n : 5;
    }

    const urlGrade = clampGrade(new URLSearchParams(window.location.search).get('grade'));
    let activeGrade = urlGrade;

    // ── Per-grade used-question tracking ─────────────────────────────────────
    // Map<grade, string[]> — tracks which question IDs have been served this session.
    const usedQuestionIds = {};
    function getUsedForGrade(grade) {
        if (!usedQuestionIds[grade]) usedQuestionIds[grade] = [];
        return usedQuestionIds[grade];
    }

    // ── Question bank ─────────────────────────────────────────────────────────
    // Loaded from mockQuestions.js (window.STARBORN_QUESTION_BANK).
    function getQuestionsForGrade(grade) {
        const bank = window.STARBORN_QUESTION_BANK || {};
        const list = bank[grade];
        if (Array.isArray(list) && list.length > 0) return list;
        // Fallback: try grade 5 if the requested grade has no questions.
        return bank[5] || [];
    }

    // ── Pick a random unused question for the given grade ─────────────────────
    function pickQuestion(grade) {
        const questions = getQuestionsForGrade(grade);
        if (!questions.length) return null;

        const used = getUsedForGrade(grade);
        let available = questions.filter(q => !used.includes(q.id));

        // If all questions exhausted, reset for this grade.
        if (available.length === 0) {
            usedQuestionIds[grade] = [];
            available = questions.slice();
        }

        const question = available[Math.floor(Math.random() * available.length)];
        getUsedForGrade(grade).push(question.id);
        return question;
    }

    // ── Render a question ─────────────────────────────────────────────────────
    function renderQuestion(question) {
        currentQuestion = question;
        promptEl.textContent = question.prompt;
        promptEl.classList.remove('loading');
        optionsEl.innerHTML = '';

        // Only multiple-choice questions are served; hide the text-input container.
        if (inputContainer) inputContainer.style.display = 'none';

        if (question.answerType === 'multiple-choice') {
            question.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = choice;
                btn.onclick = () => submitAnswer(choice);
                optionsEl.appendChild(btn);
            });
        }

        isTransitioning = false;
        appEl.classList.remove('correct-flash', 'wrong-flash');
    }

    // ── Submit an answer ──────────────────────────────────────────────────────
    function submitAnswer(answer) {
        if (isTransitioning) return;

        const isCorrect = String(answer).trim().toLowerCase() ===
            String(currentQuestion.correctAnswer).trim().toLowerCase();

        isTransitioning = true;

        if (isCorrect) {
            appEl.classList.add('correct-flash');
        } else {
            appEl.classList.add('wrong-flash');
        }

        // Send answer result back to Starborn via postMessage.
        window.parent.postMessage({
            type: 'playerAnswer',
            answer: answer,
            isCorrect: isCorrect,
            questionId: currentQuestion.id
        }, '*');

        // Brief delay so the flash animation plays before Starborn closes or requests next.
        setTimeout(() => {
            appEl.classList.remove('correct-flash', 'wrong-flash');
        }, 600);
    }

    // ── Message handler ───────────────────────────────────────────────────────
    window.addEventListener('message', (event) => {
        const message = event.data;

        if (message.type === 'reset') {
            currentQuestion = null;
            isTransitioning = false;
            // Reset used-question tracking for the current grade on reset.
            usedQuestionIds[activeGrade] = [];
            promptEl.textContent = 'Loading question...';
            promptEl.classList.add('loading');
            optionsEl.innerHTML = '';
            if (inputContainer) inputContainer.style.display = 'none';
            appEl.classList.remove('correct-flash', 'wrong-flash');
            return;
        }

        if (message.type === 'getNextQuestion') {
            // The game always sends gradeLevel; use it if valid, otherwise keep current.
            if (message.gradeLevel !== undefined && message.gradeLevel !== null) {
                activeGrade = clampGrade(message.gradeLevel);
            }

            const question = pickQuestion(activeGrade);
            if (!question) return; // No questions available — should never happen.

            // Send question metadata back to Starborn.
            window.parent.postMessage({
                type: 'questionData',
                data: {
                    id: question.id,
                    prompt: question.prompt,
                    answerType: question.answerType,
                    choices: question.choices,
                    metadata: { correctAnswer: question.correctAnswer }
                }
            }, '*');

            renderQuestion(question);
        }
    });

    // ── Notify Starborn that we are ready ─────────────────────────────────────
    const notifyReady = () => {
        if (window.hasNotifiedReady) return;
        window.hasNotifiedReady = true;
        window.parent.postMessage({ type: 'mathWebappReady' }, '*');
    };

    if (document.readyState === 'complete') {
        notifyReady();
    } else {
        window.addEventListener('load', notifyReady);
    }
})();
