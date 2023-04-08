/*
Page loads, start button is pressed, timer starts
Multiple choice question appears: dog vs cat
Ans is chosen, entered- if wrong time is -
Another question appears: beach vs mtn
Answer picked, game over, score given
*/

var welcomeEl = document.querySelector(".welcome")
var startEl = document.querySelector("#start")
var startBtnEl = document.querySelector("#startButton")
var timerEl = document.querySelector(".timer")
var questionsEl = document.querySelector("#questions")
var answerEl = document.querySelector(".answer")
var nextEl = document.querySelector(".next")
var gameoverEl = document.querySelector (".gameover")
var choicesEl = document.querySelector("#choices")
var time = questions.length * 10 //40
var timerId;
var currentQuestionIndex = 0;

function startTime() {
    time--
    timerEl.textContent = time;

    if (time <= 0) {
        console.log("game over")
        // endGame()
    }
}
function start() {
    // hide the home screen
    startEl.setAttribute("class", "hide")
    // un-hide qs
    questionsEl.removeAttribute("class")
    // start timer
    timerId = setInterval(startTime, 1000)
    // show time

    askQuestion()
    
}
startBtnEl.onclick = start;

// ask a question
function askQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    
    var titleElement = document.querySelector("#q-title")
    titleElement.textContent = currentQuestion.title

    choicesEl.innerHTML = ''

    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choice = currentQuestion.choices[index];
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("value", choice)

        choiceBtn.textContent = choice
        choicesEl.appendChild(choiceBtn)
    }
}
// handle the user clicking on a question
var feedback = document.querySelector("#feedback")
function answerClicked(event) {
    var btnEl = event.target
    console.log(btnEl)

    if (btnEl.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        feedback.textContent = "wrong"
    } else {
        feedback.textContent = "correct"
    }

    currentQuestionIndex++

    if (currentQuestionIndex === questions.length || time <= 0) {
        console.log("game over")
        //endGame()
        questionsEl.setAttribute("class", "hide")
        gameoverEl.textContent = "gameover"
    } else {
        askQuestion()
    }
}

choicesEl.onclick = answerClicked
//endGame



function setTime() {
}

/*function question() {
}

function next() {
} */