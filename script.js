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
        question: "As a small child, Harriet received a severe injury to what part of her body?",
        answers: [
            "Head",
            "ankle",
            "neck",
            "knee"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these types of disguises did she NOT employ on her first successful attempt to escape from slavery?",
        answers: [
            "field hand",
            "confederate soldier",
            "house servant",
            "pretended to read a newspaper"
        ],
        correctAnswer: 1
    },
    {
        question: "Harriet joined the union army as a nurse, but also acted as what behind enemy lines?",
        answers: [
            "private",
            "corporal",
            "a scout and spy",
            "sergeant major"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the highest amount of slaves she freed at once?",
        answers: [
            "106",
            "78",
            "40",
            "over 700"
        ],
        correctAnswer: 3
    },
    {
        question: "What year did Harriet die?",
        answers: [
            "1889",
            "1900",
            "1895",
            "1913"
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
let qNode = document.querySelector("#questions");
let questionEl = document.querySelector(".question");
let answerEl = document.querySelector(".answers");
let submitScore = document.querySelector("#submit-score");

let score = 0;
let questionNumber = 0;
let secondsLeft = 90;
let stopTimer = false;

start.addEventListener("click", function (e) {
    welcome.setAttribute("style", "visibility: hidden;");
    startTimer();
    renderQuestions();
})

function handleClick(answer){
    console.log(answer + " was clicked");
    console.log("questionNumber = " + questionNumber);
    let correctAnswer = questions[questionNumber].correctAnswer;
    questionNumber++;

    if(questionNumber > questions.length - 1) {
        clearQuestions();
        allDone.setAttribute("style", "visibility: visible;");
    }
    if(answer === correctAnswer) {
        console.log("correct!");
        renderQuestions();        
    } else {
        secondsLeft = secondsLeft - 10;
        renderQuestions();
    }
}

function renderQuestions () {
    let currentQuestion = questions[questionNumber].question;
    let answers = questions[questionNumber].answers;
    
    console.log("currentQuestion = " + currentQuestion);

    qNode.setAttribute("style", "visibility: visible;")

    for (let i = 0; i < answers.length; i++){
        let answerButton = document.querySelector("#answer-" + i);
        console.log("answerButton id = " + answerButton.id);
        answerButton.textContent = answers[i];
        questionEl.textContent = currentQuestion;
    }
    
    
}


function clearQuestions () {
    questionAnswers.setAttribute("style", "display: none;");
}

function renderHighScores () {
    //retrieve the last name/score
    let localName = localStorage.getItem("name");
    let localScore = localStorage.getItem("score");
    let highScoreDiv = document.querySelector("#high-scores");
    // let newDiv = highScoreDiv.createElement("div");
    console.log("name = " + localName + " score = " + localScore);
    console.log("highScoreDiv = " + highScoreDiv);
    //if they are null, return early from this function
    if (localName === null && localScore === null) {
        return;
    }
    //else set the text of name and score to newDiv and append if score is lower or prepend if score is higher
    highScoreDiv.textContent = localName + localScore;
}

submitScore.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.querySelector("#fname").value;
    if (name === "") {
        alert("Please enter a name.");
    }

    //save name and score to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("score", secondsLeft);
    renderHighScores();
})

function startTimer () {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || questionNumber > questions.length - 1) {
            clearInterval(timerInterval);
            clearQuestions();
            finalScore.textContent = "Final Score: " + secondsLeft;
            allDone.setAttribute("style", "visibility: visible;")
        }
    }, 1000)
}
console.log(questions);