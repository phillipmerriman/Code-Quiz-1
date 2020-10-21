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
            "yes 1",
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
            "no 2",
            "maybe",
            "so"
        ],
        correctAnswer: 1
    },
    {
        question: "3 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe 3",
            "so"
        ],
        correctAnswer: 2
    },
    {
        question: "4 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so 4"
        ],
        correctAnswer: 3
    },
    {
        question: "5 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so 5"
        ],
        correctAnswer: 3
    },
]

let welcome = document.querySelector("#welcome");
let allDone = document.querySelector("#all-done");
let start = document.querySelector("#start");
let timerEl = document.querySelector("#timer");
let questionAnswers = document.querySelector("#questions");
let finalScore = document.querySelector("#final-score");
let goBack = document.querySelector("#go-back");

let score = 0;
let questionNumber = 0;
let secondsLeft = 90;

start.addEventListener("click", function (e) {
    welcome.setAttribute("style", "visibility: hidden;");
    startTimer();
    renderQuestions();
})


function renderQuestions () {
    let qNode = document.querySelector("#questions");
    let questionEl = document.querySelector(".question");
    let answerEl = document.querySelector(".answers");
    let currentQuestion = questions[questionNumber].question;
    let answers = questions[questionNumber].answers;
    let correctAnswer = questions[questionNumber].correctAnswer;

    console.log("currentQuestion = " + currentQuestion);
    console.log(answers.length);
    console.log("correctAnswer = " + correctAnswer);

    qNode.setAttribute("style", "visibility: visible;")

    for (let i = 0; i < answers.length; i++){
        let answerButton = document.querySelector("#answer-" + i);
        console.log("answerButton id = " + answerButton.id);
        answerButton.textContent = answers[i];
        questionEl.textContent = currentQuestion;    
        answerButton.addEventListener("click", function (e) {
            e.preventDefault();
            questionNumber++;
            console.log("e.target.id = " + e.target.id.split("-")[1]);
            let userAnswer = e.target.id.split("-")[1];
            if(answerButton.id === "answer-" + correctAnswer) {
                console.log("correct!");
                renderQuestions();

            } else {
                secondsLeft = secondsLeft - 10;
                renderQuestions();
            }
            
        })
    }
    
    
    if(questionNumber > questions.length) {
        qDiv.textContent = "";
        answerEl.textContent = "";
    }
}


function clearQuestions () {
    questionAnswers.setAttribute("style", "display: none;");
}

function startTimer () {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            clearQuestions();
            finalScore.textContent = "Final Score: " + secondsLeft;
            allDone.setAttribute("style", "visibility: visible;")
        }
    }, 1000)
}
console.log(questions);