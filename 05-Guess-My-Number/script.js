"use strict";

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const initialScore = document.querySelector(".score");
const numberPlace = document.querySelector(".number");
const highscorePlace = document.querySelector(".highscore");
const inputGuess = document.querySelector(".guess");

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const backgroundChange = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkGuess = function () {
  const guess = Number(inputGuess.value);
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber && score > 0) {
    if (highscore < score) {
      highscore = score;
      highscorePlace.textContent = highscore;
    }
    backgroundChange("#60b347");
    numberPlace.style.width = "30rem";
    displayMessage("Corect number");
    numberPlace.textContent = secretNumber;
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    displayScore(score);
  } else {
    displayMessage("You loose! Try Again");
    displayScore(0);
  }
};

const reset = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  numberPlace.textContent = "?";
  displayMessage("Start guessing...");
  inputGuess.value = "";
  numberPlace.style.width = "15rem";
  backgroundChange("#222");
};

checkButton.addEventListener("click", checkGuess);
againButton.addEventListener("click", reset);
