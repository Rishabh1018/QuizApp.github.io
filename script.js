const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const maxScoreSpan = document.getElementById("max-score");
const ScoreSpan = document.getElementById("Score");
const answersContainer = document.getElementById("answers-container");
const finalScoreSpan = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const progressBar = document.getElementById("progress");

const quizQuestion = [
    {
        question: "What is the national animal of India?",
        answer: [
            {
                text: "Tiger", correct: true
            },
            {
                text: "Lion", correct: false
            },
            {
                text: "Monkey", correct: false
            },
            {
                text: "Elephant", correct: false
            }
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answer: [
            {
                text: "Earth", correct: false
            },
            {
                text: "Jupiter", correct: false
            },
            {
                text: "Mars", correct: true
            },
            {
                text: "Saturn", correct: false
            }
        ]
    },
    {
        question: 'What does "www" in a website URL stand for?',
        answer: [
            {
                text: "World Wide Web", correct: false
            },
            {
                text: "World Without War", correct: false
            },
            {
                text: "Wild World Web", correct: false
            },
            {
                text: "Web Wide World", correct: true
            }
        ]
    },
    {
        question: 'Which animal is known as the "Ship of the Desert"?',
        answer: [
            {
                text: "Camel", correct: true
            },
            {
                text: "Horse", correct: false
            },
            {
                text: "Goat", correct: false
            },
            {
                text: "Sheep", correct: false
            }
        ]
    },
    {
        question: 'Which of these is the smallest continent?',
        answer: [
            {
                text: "Africa", correct: false
            },
            {
                text: "Australia", correct: true
            },
            {
                text: "Europe", correct: false
            },
            {
                text: "Antarctica", correct: false
            }
        ]
    }
]

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestion.length;
maxScoreSpan.textContent = quizQuestion.length;

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    ScoreSpan.textContent = score;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion()
}
function showQuestion() {
    answersDisabled = false;
    const currentQuestion = quizQuestion[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex / quizQuestion.length) * 100;
    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
};

function restartQuiz() {
    console.log("quiz ended")
}