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
        ]
    },
    {
        question: "2 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ]
    },
    {
        question: "3 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ]
    },
    {
        question: "4 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ]
    },
    {
        question: "5 Riddle me this?",
        answers: [
            "yes",
            "no",
            "maybe",
            "so"
        ]
    },
]
let welcome = document.querySelector("#welcome");
let allDone = document.querySelector("#all-done");
let start = document.querySelector("#start");
let timerEl = document.querySelector("#timer");

let score = 0;
let secondsLeft = 60;

start.addEventListener("click", function (e) {
    welcome.setAttribute("style", "visibility: hidden;")
    startTimer();
})

function renderQuestions () {
    
}

function startTimer () {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            allDone.setAttribute("style", "visibility: visible;")
        }
    }, 1000)
}
console.log(questions);