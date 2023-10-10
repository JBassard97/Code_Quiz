// Assignment code, in order of HTML
// var scoreLink = document.querySelector("#scoreLink");
// var secondsEl = document.querySelector(".secondsLeft");
// var questionField = document.getElementsByClassName("questionField");
// var startButton = document.getElementById("startButton");

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", codeQuiz);
var timeLeft = 75;
document.querySelector(".secondLeft").textContent = timeLeft + " seconds left.";
var questionField = document.querySelector(".questionField");
questionField.textContent = "Coding Quiz Challenge";
// document.querySelector(".questionField").textContent = "Coding Quiz Challenge";
var answerField = document.querySelector(".answerField");
answerField.textContent =
  "Do your best to answer these coding questions before time runs out! Each incorrect answer will penalize you by 10 seconds!";

function codeQuiz() {
  var timeLeft = 75;
  var timerInterval = setInterval(function () {
    timeLeft--;
    document.querySelector(".secondLeft").textContent =
      timeLeft + " seconds left.";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      window.alert("Don't be discouraged, try again!");
    }
  }, 1000);

  questionField.textContent =
    "Which of the following are NOT a JavaScript data type?";
  questionField.setAttribute("style", "font-size:25px");
  answerField.textContent = "";
  startButton.setAttribute("style", "display:none");
}

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//   }, 1000);
// }

// function to open highscore page to be used later

// event listener to h3 to open highscore page

// event listener for start quiz button
