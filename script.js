// Assignment code, in order of HTML
// var scoreLink = document.querySelector("#scoreLink");
// var secondsEl = document.querySelector(".secondsLeft");
// var questionField = document.getElementsByClassName("questionField");
// var startButton = document.getElementById("startButton");

let timeLeft = 75;
document.querySelector(".secondLeft").textContent = timeLeft + " seconds left.";
document.querySelector(".questionField").textContent = "Coding Quiz Challenge";
document.querySelector(".answerField").textContent =
  "Do your best to answer these coding questions before time runs out! Each incorrect answer will penalize you by 10 seconds!";

function codeQuiz() {}

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
document.querySelector("#startButton").addEventListener("click", codeQuiz());
