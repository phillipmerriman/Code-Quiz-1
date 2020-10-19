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

create initial homepage in html
add bootstrap
create array of questions and answers
create score variable
creat timer
create scoreboard
*/
let questions = [
    {
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ]
    }
]
let score = 0;

console.log(questions);