// Assignment code, in order of HTML
// var scoreLink = document.querySelector("#scoreLink");
// var secondsEl = document.querySelector(".secondsLeft");
// var questionField = document.getElementsByClassName("questionField");
// var startButton = document.getElementById("startButton");

var startButton = document.getElementById("startButton");
// Begins codeQuiz() when startButton clicked
startButton.addEventListener("click", codeQuiz);
// Globally initializing timer
var timeLeft = 75;
// Displaying it to the page
document.querySelector(".secondLeft").textContent = timeLeft + " seconds left";
var questionField = document.querySelector(".questionField");
questionField.textContent = "Coding Quiz Challenge";
var answerField = document.querySelector(".answerField");
answerField.textContent =
  "Do your best to answer these coding questions before time runs out! Each incorrect answer will penalize you by 10 seconds!";

function codeQuiz() {
  // TODO: SETTING TIMER THAT DECREMENTS WHEN QUIZ STARTS
  var timerInterval = setInterval(function () {
    timeLeft--;
    document.querySelector(".secondLeft").textContent =
      timeLeft + " seconds left";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      window.alert("Don't be discouraged, try again!");
    }
  }, 1000);

  //   Making question's text slightly smaller
  questionField.setAttribute("style", "font-size:25px");
  //   Clearing quiz description field
  answerField.textContent = "";
  //   Making startButton disappear when clicked
  startButton.setAttribute("style", "display:none");

  var answerChoices = [];
  var correctAnswer = "";

  // TODO: Creating ordered list of buttons with names from answerChoices
  function createButtons() {
    var ol = document.createElement("ol");
    for (var i = 0; i < answerChoices.length; i++) {
      // Creating Elements
      var li = document.createElement("li");
      var button = document.createElement("button");
      // each button given text corresponding to rising index in answerChoices
      button.textContent = answerChoices[i];
      // each button clicked will run checkAnswer()
      button.addEventListener("click", checkAnswer);
      // appending button to list item
      li.appendChild(button);
      // appending list item to ordered list
      ol.appendChild(li);
    }
    // appending the ordered list to the answerField
    answerField.appendChild(ol);
    function checkAnswer(event) {
      //   Stores the textContent of the button clicked in userInput to handle
      const userInput = event.target.textContent;
      console.log(">>> Selected:", userInput);

      // Creates element to be appended upon button presses
      var correctReaction = document.createElement("h2");
      correctReaction.textContent = "Correct!";
      correctReaction.setAttribute("style", "border-top: 3px solid limegreen");
      // Makes reaction disappear after displaying for 1 second
      setTimeout(() => {
        correctReaction.setAttribute("style", "display: none");
      }, 1000);

      var incorrectReaction = document.createElement("h2");
      incorrectReaction.textContent = "Incorrect!";
      incorrectReaction.setAttribute("style", "border-top: 3px solid red");
      setTimeout(() => {
        incorrectReaction.setAttribute("style", "display: none");
      }, 1000);

      //  TODO: Handling correct choices
      if (userInput === correctAnswer) {
        console.log("Correct!");
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
      }
    }
  }

  question1();
  //   TODO: QUESTION #1
  function question1() {
    questionField.textContent =
      "Which of the following are NOT a JavaScript data type?";
    answerChoices = ["BigInt", "Figure", "String", "Number"];
    correctAnswer = "Figure";

    createButtons();
  }

  // TODO: QUESTION #2
  function question2() {
    questionField.textContent = "Question 2!";
    answerField.textContent = "";
    answerChoices = ["1", "2", "3", "4"];
    correctAnswer = "3";

    createButtons();
    checkAnswer();
  }
  // END OF CODEQUIZ
}

// function to open highscore page to be used later

// event listener to h3 to open highscore page
