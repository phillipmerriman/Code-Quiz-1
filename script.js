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
    welcome.setAttribute("style", "visibility: hidden;")
    startTimer();
    renderQuestions();
})

// function renderQuestions () {
//     let questionEl = document.querySelector(".question");
//     let answerEl = document.querySelector(".answers");
//     for (let i = 0; i < questions.length; i++) {
//         let question = questions[i].question;
//         let answers = questions[i].answers[i];
//         let correctAnswser = questions[i].correctAnswer;
//         let qDiv = document.createElement("div");
//         let aLi = document.createElement("li");
//         let answerButton = document.createElement("button");
//         qDiv.textContent = question;
//         answerButton.textContent = answers;
//         aLi.append(answerButton);
//         questionEl.appendChild(qDiv);
//         answerEl.appendChild(aLi);
//     }
// }
function renderQuestions () {
    let questionEl = document.querySelector(".question");
    let answerEl = document.querySelector(".answers");
    let qDiv = document.createElement("div");
    let question = questions[questionNumber].question;
    let answers = questions[questionNumber].answers;
    let correctAnswer = questions[questionNumber].correctAnswer;

    console.log("question = " + question);
    console.log(answers.length);
    console.log("correctAnswer = " + correctAnswer);

    for (let i = 0; i < answers.length; i++){
        let answerLi = document.createElement("li");
        let answerButton = document.createElement("button");
        let buttons = document.querySelectorAll("button");
        answerButton.textContent = answers[i];
        answerLi.append(answerButton);
        answerEl.appendChild(answerLi);
        buttons[i].id = i;
        console.log("buttons[i] = " + buttons[i]);
        answerButton.addEventListener("click", function (e) {
            let buttonClicked = e;
            console.log(buttonClicked.srcElement);
            // if(e.)
            qDiv.textContent = "";
            answerEl.textContent = "";
            // renderQuestion2();
        })
    }

    qDiv.textContent = question;
    questionEl.appendChild(qDiv);

    // let answerButtonEl = document.querySelector("button");

    
    questionNumber++;
}
// function renderQuestions () {
//     let questionEl = document.querySelector(".question");
//     let answerEl = document.querySelector(".answers");
//     let qDiv = document.createElement("div");
//     let question = questions[questionNumber].question;

//     for (let i = 0; i < questions.length; i++) {
//         let answers = questions[i].answers[i];
//         let correctAnswser = questions[i].correctAnswer;
//         let answerLi = document.createElement("li");
//         let answerButton = document.createElement("button");
//         qDiv.textContent = question;
//         answerButton.textContent = answers;
//         answerLi.append(answerButton);
//         questionEl.appendChild(qDiv);
//         answerEl.appendChild(answerLi);
//         answerButton.addEventListener("click", function (e) {
//             console.log(e);
//             qDiv.textContent = "";
//             answerEl.textContent = "";
//             renderQuestions();
//         })
//     }
//     questionNumber++;
// }


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