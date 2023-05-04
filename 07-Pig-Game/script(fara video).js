"use strict";

//Selecting elements
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.querySelector("#score--1");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//Starting
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceImg.classList.add("hidden");
let currentScore = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let player = 0;

//Rolling dice
const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;
  if (diceImg.classList.contains("hidden")) diceImg.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    player === 0
      ? (currentEl0.textContent = currentScore)
      : (currentEl1.textContent = currentScore);
  } else {
    //switch players
    currentScore = 0;
    player === 0
      ? (currentEl0.textContent = currentScore)
      : (currentEl1.textContent = currentScore);
    switchPlayer();
  }
};

//Holding score
const holdScore = function () {
  if (player === 0) {
    totalScore0 += currentScore;
    scoreEl0.textContent = totalScore0;
    currentScore = 0;
    currentEl0.textContent = currentScore;
  } else {
    totalScore1 += currentScore;
    scoreEl1.textContent = totalScore1;
    currentScore = 0;
    currentEl1.textContent = currentScore;
  }
  if (totalScore0 >= 100) {
    player0.classList.add("player--winner");
  } else if (totalScore1 >= 100) {
    player1.classList.add("player--winner");
  } else {
    switchPlayer();
  }
};

//Switch players
const switchPlayer = function () {
  if (player === 0) {
    player = 1;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  } else {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    player = 0;
  }
};

//Reset
const newGame = function () {
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceImg.classList.add("hidden");
  currentScore = 0;
  totalScore0 = 0;
  totalScore1 = 0;
  if (player === 1) {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    player = 0;
  }
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
};

btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
