let currentLevel = 1;
let correctAnswers = 0;
let wrongAnswers = 0;

const questions = [
    {
        level: 1,
        question: "Kavous is the commander of a spaceship traveling to an unknown planet. The spaceship's navigation system unexpectedly breaks down, and Kavous must choose between two dangerous routes: one to a planet with infinite resources but deadly dangers, and the other to a cold and barren planet. He has limited time, and the right decision can determine the future of the entire spaceship. <br> Which skill should Kavous use to choose the best path?",
        answer: "DecisionMaking",
        type: "drag-drop",
        icon: "fas fa-rocket"
    },
    {
        level: 2,
        question: "Lia is a futuristic hacker who can predict the future, but one day, an unexpected event occurs in the digital world: a powerful virus attacks her system and locks important data. She must quickly rebuild her system and design new algorithms to fight this threat.<br> Which skill should Lia use to handle this crisis and quickly rebuild her system?",
        answer: "Flexibility",
        type: "drag-drop",
        icon: "fas fa-laptop-code"
    },
    {
        level: 3,
        question: "Max and Rico are two digital explorers in the cyber world searching for a secret code. Each has different information and neither can reach the goal without cooperating with the other. However, neither wants to accept the other's opinion, causing tensions.<br> Which skill should Max and Rico use to obtain the secret code and succeed?",
        options: ["Collaboration", "DecisionMaking", "Flexibility"],
        correctAnswer: "Collaboration",
        type: "multiple-choice",
        icon: "fas fa-search"
    },
    {
        level: 4,
        question: "Hanna is a robotics engineer who must build a smart robot that can help humans in critical situations. She has only 24 hours to finish the robot, facing issues like defective parts and coding problems. Hanna must manage everything efficiently to complete the project on time.<br> Which skill should Hanna use to complete the project within the limited time?",
        answer: "TimeManagement",
        type: "drag-drop",
        icon: "fas fa-robot"
    },
    {
        level: 5,
        question: "Arya is the commander of a team responsible for data control and security in the virtual world. One night, hackers infiltrate vital systems and steal sensitive data. Arya must take full responsibility for recovering information and identifying the hackers to prevent a major crisis.<br> Which skill should Arya use to handle this crisis and solve the security problem?",
        answer: "Responsibility",
        type: "drag-drop",
        icon: "fas fa-shield-alt"
    },
    {
        level: 6,
        question: "Sara is a big data analyst dealing with complex and disorganized information. She must analyze the data so the team members can understand it clearly. However, one member sends ambiguous information and Sara needs to improve communication.<br> Which skill should Sara use to enhance communication and correctly transfer information?",
        options: ["EffectiveCommunication", "CriticalThinking", "StressManagement"],
        correctAnswer: "EffectiveCommunication",
        type: "multiple-choice",
        icon: "fas fa-chart-line"
    },
    {
        level: 7,
        question: "Kai is the leader of an elite digital counter-terrorism team who must stop a major cyberattack. Team members specialize in different fields but don't know where to act. Kai must coordinate and guide the team to complete the mission without casualties.<br> Which skill should Kai use to lead the counter-terrorism team?",
        answer: "Leadership",
        type: "drag-drop",
        icon: "fas fa-users"
    },
    {
        level: 8,
        question: "Tai is a leading researcher in augmented reality. In a new project, two teams have serious conflicts: one insists on a simple user experience, and the other wants more complex and attractive visual effects. Tai must resolve this conflict so the project succeeds.<br> Which skill should Tai use to solve the conflict between the teams?",
        answer: "ConflictResolution",
        type: "drag-drop",
        icon: "fas fa-puzzle-piece"
    },
    {
        level: 9,
        question: "Zila is a virtual reality designer creating a new digital world but faces a big challenge: there's no obvious way to combine all elements in the virtual world. Zila must think creatively to build an environment users will enjoy and have an unforgettable experience.<br> Which skill should Zila use to design an innovative virtual environment?",
        options: ["Creativity", "Innovation", "CriticalThinking"],
        correctAnswer: "Creativity",
        type: "multiple-choice",
        icon: "fas fa-paint-brush"
    },
    {
        level: 10,
        question: "Arya is leading a major project to build smart robots. As the deadline approaches, the team is under a lot of stress and members aren't coordinating well. Arya must create a calming atmosphere and focus the team to successfully complete the project.<br> Which skill should Arya use to reduce and manage stress within the team?",
        answer: "StressManagement",
        type: "drag-drop",
        icon: "fas fa-hourglass"
    },
    {
        level: 11,
        question: "Mina is a digital consultant who helps companies optimize their online strategies. Recently, her team has had low motivation and declining project results. Mina must use innovative methods to re-energize her team.<br> Which skill should Mina use to boost team motivation?",
        answer: "Motivation",
        type: "drag-drop",
        icon: "fas fa-lightbulb"
    },
    {
        level: 12,
        question: "Felix is a research manager at an advanced AI company. His team has collected massive data to improve AI algorithms, but some data seems contradictory. Felix must carefully analyze the data and solve the problem with critical thinking.<br> Which skill should Felix use to analyze contradictory data and reach accurate conclusions?",
        options: ["CriticalThinking", "ComplexProblemSolving", "FuturePredictionAndAnalysis"],
        correctAnswer: "CriticalThinking",
        type: "multiple-choice",
        icon: "fas fa-brain"
    }
];

function loadQuestion() {
    const question = questions.find(q => q.level === currentLevel);
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `<i class="${question.icon}"></i> ${question.question}`;
    const answerContainer = document.getElementById('answer-container');
    const puzzleContainer = document.getElementById('puzzle-container');
    const optionsContainer = document.getElementById('options-container');
    answerContainer.innerHTML = '';
    puzzleContainer.innerHTML = '';
    optionsContainer.innerHTML = '';

    if (question.type === "multiple-choice") {
        question.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.onclick = () => selectAnswer(option);
            optionsContainer.appendChild(button);
        });
    } else if (question.type === "drag-drop") {
        for (let i = 0; i < question.answer.length; i++) {
            const slot = document.createElement('div');
            slot.classList.add('answer-slot');
            slot.dataset.index = i;
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                const letter = e.dataTransfer.getData('text/plain');
                slot.textContent = letter;
                slot.dataset.letter = letter;
                const puzzlePiece = document.querySelector(`.puzzle-piece[data-letter="${letter}"]`);
                if (puzzlePiece) {
                    puzzlePiece.style.visibility = 'hidden';
                }
            });
            answerContainer.appendChild(slot);
        }

        const shuffledLetters = shuffleArray([...question.answer]);
        shuffledLetters.forEach((letter) => {
            const piece = document.createElement('div');
            piece.textContent = letter;
            piece.classList.add('puzzle-piece');
            piece.draggable = true;
            piece.dataset.letter = letter;
            piece.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', letter);
            });
            puzzleContainer.appendChild(piece);
        });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectAnswer(selectedOption) {
    const question = questions.find(q => q.level === currentLevel);
    if (selectedOption === question.correctAnswer) {
        correctAnswers++;
        currentLevel++;
        if (currentLevel > questions.length) {
            endQuiz();
        } else {
            loadQuestion();
        }
    } else {
        wrongAnswers++;
        endQuiz();
    }
}

function checkAnswer() {
    const question = questions.find(q => q.level === currentLevel);
    if (question.type === "drag-drop") {
        const answerContainer = document.getElementById('answer-container');
        const userAnswer = Array.from(answerContainer.children).map(slot => slot.dataset.letter).join('');
        if (userAnswer === question.answer) {
            correctAnswers++;
            currentLevel++;
            if (currentLevel > questions.length) {
                endQuiz();
            } else {
                loadQuestion();
            }
        } else {
            wrongAnswers++;
            endQuiz();
        }
    }
}

function endQuiz() {
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);
    window.location.href = "results.html";
}

window.onload = loadQuestion;
