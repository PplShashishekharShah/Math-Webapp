(function() {
    const promptEl = document.getElementById('prompt');
    const optionsEl = document.getElementById('options');
    const inputContainer = document.getElementById('input-container');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');

    let currentQuestion = null;

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
            answerInput.focus();
        }
    }

    function submitAnswer(answer) {
        // Send answer to Starborn
        window.parent.postMessage({
            type: 'playerAnswer',
            answer: answer,
            questionId: currentQuestion.id
        }, '*');
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
        if (message.type === 'getNextQuestion') {
            // Pick a random question for now
            const nextIdx = Math.floor(Math.random() * mockQuestions.length);
            const question = mockQuestions[nextIdx];
            
            // Send question metadata back to Starborn
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

    // Notify Starborn that the math webapp is ready
    // We send this multiple times or wait a bit to ensure parent is listening
    const notifyReady = () => {
        window.parent.postMessage({ type: 'mathWebappReady' }, '*');
    };

    notifyReady();
    // Also send when fully loaded
    window.onload = notifyReady;
})();
