# Code_Quiz

## Description
  This repository contains the source code for my Code Quiz application! This app will take users through a 5 question quiz, and upon completion will store the user's initials and remaining time to be displayed on a highscores page for all to see.

## Features
   This project allowed me to learn about and utilize many of JavaScript's capabilities. EventListeners give the link to the highscores page and every button their functionality. Elements are created and appended to the page dynamically within the JS file, but along the way I also learned to appreciate the simplicity of hard-coding some elements straight into the HTML file. Each question of the quiz is a function in the code, containing the question itself, it's possible answers, and the correct answer. Because of this, it's easy to change the quiz to your individual needs. The highscores page displays each entry by looping through an object array in localStorage. Just in case the board gets too full, I've included a "Clear Highscores" button that will clear localStorage and reset the display. 

## Usage/Deployed Link
The link to the deployed application is:


When loading the application, you're presented with the title of the quiz, a link to the highscore page (if there are highscores to show!), and description of the penalty should you answer incorrectly. Upon pressing the "Start Quiz" button, you will be displayed each question one at a time. You will not be able to proceed to the next one unless you answer correctly! Once complete, your time remaining on the clock will be stored along with your initials to be displayed under Highscores. In the event that there are no highscores in localStorage, the link to that page will become unusable and prompt you to contribute a score of your own!

## Screenshots
<img width="517" alt="cq screenshot" src="https://github.com/JBassard97/Code_Quiz/assets/142551579/2aff45c2-fd46-49cc-b225-9a30d028a785">
<img width="518" alt="cq question" src="https://github.com/JBassard97/Code_Quiz/assets/142551579/7c45552e-b003-4139-a749-c59644a69460">
<img width="479" alt="cq alldone" src="https://github.com/JBassard97/Code_Quiz/assets/142551579/8aacbfcd-99ca-48cf-a593-3cc80f670a76">
<img width="509" alt="cq highscore" src="https://github.com/JBassard97/Code_Quiz/assets/142551579/f5b9e040-3fe5-49c6-b8be-0ef01a37a51f">








