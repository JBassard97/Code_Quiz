var scoreLink = document.querySelector("#scoreLink");
// TODO: Takes user to highscore page, but goes through function that edits restartButton's textContent first
scoreLink.addEventListener("click", viewHighscores);
var startButton = document.getElementById("startButton");
// TODO: Begins codeQuiz() when startButton clicked
startButton.addEventListener("click", codeQuiz);
// Globally initializing timer
var timeLeft = 75;
// Displaying it to the page
var timeDisplay = document.querySelector(".secondLeft");
timeDisplay.textContent = timeLeft + " seconds left";
var questionField = document.querySelector(".questionField");
var answerField = document.querySelector(".answerField");
var mainSection = document.querySelector("#mainSection");

var retryButton = document.querySelector("#retryButton");
// TODO: Takes User back to how everything initially set in beginning()
retryButton.addEventListener("click", beginning);

var currentParsedScores = JSON.parse(localStorage.getItem("initials"));
var highscoresContainer = document.querySelector("#highscoresContainer");
var scoreArray = [];
var formDiv = document.createElement("div");
var formLabel = document.createElement("label");
var formInput = document.createElement("input");
var submitButton = document.createElement("button");
var scoreDiv = document.createElement("div");
var header = document.querySelector("#header");
var clearButton = document.querySelector("#clearScores");
clearButton.addEventListener("click", clearHighscores);

// This function establishes variables and handles when the user returns
function beginning() {
  //   Setting/Resetting timeDisplay
  timeLeft = 75;
  timeDisplay.style.display = "inline";
  timeDisplay.textContent = timeLeft + " seconds left";
  //   Setting/Resetting text in the main section
  questionField.textContent = "Coding Quiz Challenge";
  answerField.textContent =
    "Do your best to answer these coding questions before time runs out! Each incorrect answer will penalize you by 10 seconds!";
  console.log("<<< Welcome to the Coding Quiz >>>");
  // Hides Highscores list
  highscoresContainer.style.display = "none";
  //   Makes scoreLink reappear
  scoreLink.style.display = "inline";
  scoreLink.style.visibility = "visible";
  // Makes timeDisplay reappear
  timeDisplay.style.display = "inline";
  // Hides Retry? Button
  retryButton.style.display = "none";
  // Hides Clear Highscores button
  clearButton.style.display = "none";
  // Makes start button appear
  startButton.style.display = "block";
  //    TODO: If local storage empty, deny access to a Highscore page
  if (localStorage.length === 0) {
    scoreLink.textContent = "No Highscores Yet!";
    scoreLink.removeEventListener("click", viewHighscores);
  } else {
    scoreLink.textContent = "View Highscores!";
    scoreLink.addEventListener("click", viewHighscores);
    scoreLink.style.visibility = "visible";
  }
}

// TODO: Calling function to set textContent/visibility
beginning();

function viewHighscores() {
  highScoresPage();
  //   keeping button function, changing user perception if coming from scoreLink specifically
  retryButton.textContent = "Give it a go!";
}

function clearHighscores() {
//   Clearing local storage
    localStorage.clear();
//   Clearing content on page
    highscoresContainer.textContent = "";
    console.log("Local storage Cleared! Take a look:");
    console.log(localStorage);
}

function highScoresPage() {
  scoreLink.style.display = "none";
  questionField.textContent = "Highscores!";
  highscoresContainer.style.display = "block";
  //   Clearing description text
  answerField.textContent = "";
  //   Making time display in top right disappear
  timeDisplay.textContent = "";
  //   Getting scores with key "initials" and storing parsed form in a variable
  var currentParsedScores = JSON.parse(localStorage.getItem("initials"));
  console.log(currentParsedScores);

  // clears highscores when exiting page!
  highscoresContainer.textContent = "";

  // Creating and appending divs to highscoresContainer for each score in the array
  for (let i = 0; i < currentParsedScores.length; i++) {
    const score = currentParsedScores[i];
    var scoreLine = document.createElement("div");
    // Setting the text content for each [i]
    scoreLine.textContent = score.initials + " " + score.score;
    // setting a class to style easier in CSS
    scoreLine.setAttribute("class", "styledScore");
    highscoresContainer.appendChild(scoreLine);
  }

  retryButton.textContent = "Retry?";
  retryButton.style.display = "block";
  clearButton.style.display = "block";
  // View Highscores! in corner disappears
  scoreLink.style.display = "none";
  startButton.style.display = "none";
}

// Handles when user fails quiz by returning them to beginning
function gameOver() {
      window.alert("Don't be discouraged, try again!");
    beginning();
}

function codeQuiz() {
  // Re-establishes timer at 75
  timeLeft = 75;
  // Makes timeDisplay reappear when quiz restarts
  timeDisplay.style.display = "inline";
  formDiv.style.visibility = "hidden";
  formDiv.textContent = "";
  scoreLink.style.visibility = "hidden";

  // TODO: SETTING TIMER THAT DECREMENTS WHEN QUIZ STARTS
  var timerInterval = setInterval(function () {
    timeLeft--;
    document.querySelector(".secondLeft").textContent =
      timeLeft + " seconds left";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
        gameOver();
    }
  }, 1000);

  //   Making question's text slightly smaller
  questionField.setAttribute("style", "font-size:25px");
  //   Making startButton disappear when clicked
  startButton.style.display = "none";
  // mainSection.removeChild(retryButton);

  //   TODO: THESE FUNCTIONS DO 2 THINGS EACH

  function createQuizPage1() {
    // TODO: Creating ordered list of buttons with names from answerChoices
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

    var correctReaction = document.createElement("h2");
    correctReaction.textContent = "Correct!";
    correctReaction.setAttribute("style", "border-top: 3px solid limegreen");

    var incorrectReaction = document.createElement("h2");
    incorrectReaction.textContent = "Incorrect!";
    incorrectReaction.setAttribute("style", "border-top: 3px solid red");
    setTimeout(() => {
      incorrectReaction.setAttribute("style", "display: none");
    }, 1000);

    function checkAnswer(event) {
      //   Stores the textContent of the button clicked in userInput to handle
      const userInput = event.target.textContent;
      console.log(">>> Selected:", userInput);

      // Creates element to be appended upon button presses
      var correctReaction = document.createElement("h2");
      correctReaction.textContent = "Correct!";
      correctReaction.setAttribute("style", "border-top: 3px solid limegreen");

      var incorrectReaction = document.createElement("h2");
      incorrectReaction.textContent = "Incorrect!";
      incorrectReaction.setAttribute("style", "border-top: 3px solid red");
      setTimeout(() => {
        incorrectReaction.setAttribute("style", "display: none");
      }, 1000);

      //  TODO: Handling correct choices
      if (userInput === correctAnswer) {
        console.log("Correct!");
        document.body.setAttribute("style", "background-color: palegreen");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
          correctReaction.setAttribute("style", "diplay: none");
          correctReaction.textContent = "";
        }, 1000);
        question2();
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
        document.body.setAttribute("style", "background-color: lightpink");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
        }, 1000);
      }
    }
  }
  function createQuizPage2() {
    // TODO: Creating ordered list of buttons with names from answerChoices
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
        document.body.setAttribute("style", "background-color: palegreen");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
          correctReaction.setAttribute("style", "diplay: none");
          correctReaction.textContent = "";
        }, 1000);
        question3();
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
        document.body.setAttribute("style", "background-color: lightpink");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
        }, 1000);
      }
    }
  }
  function createQuizPage3() {
    // TODO: Creating ordered list of buttons with names from answerChoices
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

      // TODO: Creating correct/incorrect reactions upon button choice handling
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
        document.body.setAttribute("style", "background-color: palegreen");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
          correctReaction.setAttribute("style", "diplay: none");
          correctReaction.textContent = "";
        }, 1000);
        question4();
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
        document.body.setAttribute("style", "background-color: lightpink");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
        }, 1000);
      }
    }
  }
  function createQuizPage4() {
    // TODO: Creating ordered list of buttons with names from answerChoices
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

      // TODO: Creating correct/incorrect reactions upon button choice handling
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
        document.body.setAttribute("style", "background-color: palegreen");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
          correctReaction.setAttribute("style", "diplay: none");
          correctReaction.textContent = "";
        }, 1000);
        question5();
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
        document.body.setAttribute("style", "background-color: lightpink");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
        }, 1000);
      }
    }
  }
  function createQuizPage5() {
    // TODO: Creating ordered list of buttons with names from answerChoices
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

      // TODO: Creating correct/incorrect reactions upon button choice handling
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
        document.body.setAttribute("style", "background-color: palegreen");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
          correctReaction.setAttribute("style", "diplay: none");
          correctReaction.textContent = "";
        }, 1000);
        donePage();
        answerField.appendChild(correctReaction);
      }

      //   TODO: Handling incorrect choices
      else {
        console.log("Incorrect!");
        answerField.appendChild(incorrectReaction);
        //   Penalizing 10 Seconds
        timeLeft = timeLeft - 10;
        document.body.setAttribute("style", "background-color: lightpink");
        setTimeout(() => {
          document.body.setAttribute("style", "background-color: thistle");
        }, 1000);
      }
    }
  }

  // Calling question1() when codeQuiz() begins
  question1();

  //   TODO: QUESTION #1
  function question1() {
    //   Clearing quiz description field
    answerField.textContent = "";
    questionField.textContent =
      "Which one of the following is NOT a JavaScript data type?";
    answerChoices = ["Figure", "String", "Boolean", "Null", "Symbol"];
    correctAnswer = "Figure";

    createQuizPage1();
  }

  // TODO: QUESTION #2
  function question2() {
    answerField.textContent = "";
    questionField.textContent =
      "What does the '===' operator do in JavaScript?";
    answerChoices = [
      "Checks if two values are equal",
      "Checks if two values are of similar type and value",
      "Assigns a value to a variable",
    ];
    correctAnswer = "Checks if two values are of similar type and value";

    createQuizPage2();
  }

  // TODO: QUESTION #3
  function question3() {
    answerField.textContent = "";
    questionField.textContent =
      "Google Fonts, JQuery, and Bootstrap are all examples of?";
    answerChoices = ["SSH Keys", "Applications", "API's", "Event Listeners"];
    correctAnswer = "API's";

    createQuizPage3();
  }

  // TODO: QUESTION #4
  function question4() {
    answerField.textContent = "";
    questionField.textContent =
      "What is the purpose of the localStorage object?";
    answerChoices = [
      "Parsing JSON",
      "Storing browser history",
      "Creating animations",
      "Storing session data",
    ];
    correctAnswer = "Storing session data";

    createQuizPage4();
  }

  // TODO: QUESTION #5
  function question5() {
    answerField.textContent = "";
    questionField.textContent =
      "Is everything in JavaScript considered an 'object?'";
    answerChoices = ["Yes", "No"];
    correctAnswer = "Yes";

    createQuizPage5();
  }

  // TODO: DONE PAGE
  function donePage() {
    questionField.textContent = "All Done!";
    //   Pauses timer in top right!
    clearInterval(timerInterval);
    //   Storing time left in score variable
    var score = timeLeft;
    answerField.textContent =
      "Job well done. Your score for this attempt is: " + score + "!";

    // Creating form element to input initials
    var formDiv = document.createElement("div");
    var formLabel = document.createElement("label");
    var formInput = document.createElement("input");
    var submitButton = document.createElement("button");

    formLabel.setAttribute("for", "text-input");
    formLabel.textContent = "Enter your initials: ";

    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "text-input");

    submitButton.setAttribute("id", "submit-button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", submit);

    formDiv.appendChild(formLabel);
    formDiv.appendChild(formInput);
    formDiv.appendChild(submitButton);

    var mainSection = document.querySelector("#mainSection");
    formDiv.style.visibility = "visible";
    mainSection.appendChild(formDiv);

    function submit() {
      var initials = formInput.value;
      var scoreObject = {
        initials,
        score,
      };

      // If anything in localStorage, add the contents of its array to score array
      // This line lets new scores display with old ones!
      if (localStorage.length > 0) {
        scoreArray.push(...currentParsedScores);
      }
      //   scoreArray now contains the scoreObject

      scoreArray.push(scoreObject);

      //   Stringifying scoreArray and setting in local storage
      localStorage.setItem("initials", JSON.stringify(scoreArray));
      //   Making form element disappear when submit button pressed
      formDiv.style.display = "none";
      highScoresPage();
    }
  }

  // retryButton.style.display = "inline";
  // mainSection.appendChild(retryButton);
}
