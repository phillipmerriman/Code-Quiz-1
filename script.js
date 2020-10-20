/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

create initial welcome/homepage in html
-h1 with title
-explanation of quiz
-start button

create question page
-create ul and buttons for multiple choice answers

create "all done!" page

create scoreboard

create array of questions and answers
create score variable
creat timer
*/
let questions = [
    {
        question: "1 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ],
        correctAnswer: 0
    },
    {
        question: "2 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ],
        correctAnswer: 0
    },
    {
        question: "3 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ],
        correctAnswer: 0
    },
    {
        question: "4 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ],
        correctAnswer: 0
    },
    {
        question: "5 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ],
        correctAnswer: 0
    },
]

let welcome = document.querySelector("#welcome");
let allDone = document.querySelector("#all-done");
let start = document.querySelector("#start");
let timerEl = document.querySelector("#timer");
let questionAnswers = document.querySelector("#questions");
console.log(welcome);
console.log(questionAnswers);

let score = 0;
let secondsLeft = 4;

start.addEventListener("click", function (e) {
    welcome.setAttribute("style", "visibility: hidden;")
    startTimer();
    renderQuestions();
})

function renderQuestions () {
    let questionEl = document.querySelector(".question");
    let answerEl = document.querySelector(".answers");
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i].question;
        let answers = questions[i].answers[i];
        let correctAnswser = questions[i].correctAnswer;
        let qDiv = document.createElement("div");
        let aLi = document.createElement("li");
        let answerButton = document.createElement("button");
        qDiv.textContent = question;
        answerButton.textContent = answers;
        aLi.append(answerButton);
        questionEl.appendChild(qDiv);
        answerEl.appendChild(aLi);
    }
}

function clearQuestions () {
    questionAnswers.setAttribute("style", "visibility: hidden;");
}

function startTimer () {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            clearQuestions();
            allDone.setAttribute("style", "visibility: visible;")
        }
    }, 1000)
}
console.log(questions);