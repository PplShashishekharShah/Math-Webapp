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
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');

    let currentQuestion = null;
    let isTransitioning = false;
    let usedQuestions = []; // Track used questions per chest

    // Placeholder questions for Grade 5
    const mockQuestions = [
        {
            id: 'q1',
            prompt: 'What is 12 x 8?',
            answerType: 'multiple-choice',
            choices: ['86', '96', '106', '76'],
            correctAnswer: '96'
        },
        {
            id: 'q2',
            prompt: 'Solve: 125 / 5',
            answerType: 'input',
            correctAnswer: '25'
        },
        {
            id: 'q3',
            prompt: 'What is the area of a rectangle with length 10 and width 5?',
            answerType: 'multiple-choice',
            choices: ['15', '50', '25', '60'],
            correctAnswer: '50'
        },
        {
            id: 'q4',
            prompt: 'What is 15 + 27?',
            answerType: 'input',
            correctAnswer: '42'
        },
        {
            id: 'q5',
            prompt: 'Which is a prime number?',
            answerType: 'multiple-choice',
            choices: ['9', '15', '17', '21'],
            correctAnswer: '17'
        }
    ];

    function renderQuestion(question) {
        currentQuestion = question;
        promptEl.textContent = question.prompt;
        promptEl.classList.remove('loading');
        optionsEl.innerHTML = '';
        inputContainer.style.display = 'none';

        if (question.answerType === 'multiple-choice') {
            question.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = choice;
                btn.onclick = () => submitAnswer(choice);
                optionsEl.appendChild(btn);
            });
        } else if (question.answerType === 'input') {
            inputContainer.style.display = 'flex';
            answerInput.value = '';
            setTimeout(() => answerInput.focus(), 100);
        }
        
        isTransitioning = false;
        appEl.classList.remove('correct-flash', 'wrong-flash');
    }

    function submitAnswer(answer) {
        if (isTransitioning) return;
        
        const isCorrect = String(answer).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
        
        isTransitioning = true;
        
        if (isCorrect) {
            appEl.classList.add('correct-flash');
        } else {
            appEl.classList.add('wrong-flash');
        }

        // Send answer to Starborn
        window.parent.postMessage({
            type: 'playerAnswer',
            answer: answer,
            isCorrect: isCorrect, // UI feedback optimization
            questionId: currentQuestion.id
        }, '*');
        
        // Brief delay for feedback before Starborn might close or request next
        setTimeout(() => {
            appEl.classList.remove('correct-flash', 'wrong-flash');
        }, 600);
    }

    submitBtn.onclick = () => {
        const answer = answerInput.value.trim();
        if (answer) {
            submitAnswer(answer);
        }
    };

    answerInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    };

    window.addEventListener('message', (event) => {
        const message = event.data;
        if (message.type === 'reset') {
            currentQuestion = null;
            isTransitioning = false;
            usedQuestions = [];
            promptEl.textContent = 'Loading question...';
            promptEl.classList.add('loading');
            optionsEl.innerHTML = '';
            inputContainer.style.display = 'none';
            appEl.classList.remove('correct-flash', 'wrong-flash');
            return;
        }

        if (message.type === 'getNextQuestion') {
            // Get unused questions
            const availableQuestions = mockQuestions.filter(q => !usedQuestions.includes(q.id));
            
            // If all questions have been used, reset the used list
            if (availableQuestions.length === 0) {
                usedQuestions = [];
            }
            
            // Select a random question from available ones
            const nextIdx = Math.floor(Math.random() * (availableQuestions.length || mockQuestions.length));
            const question = availableQuestions.length > 0 ? availableQuestions[nextIdx] : mockQuestions[nextIdx];
            
            // Mark this question as used
            if (!usedQuestions.includes(question.id)) {
                usedQuestions.push(question.id);
            }
            
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
