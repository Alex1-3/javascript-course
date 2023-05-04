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
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Starting
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceImg.classList.add("hidden");

let currentScore, scores, activePlayer, playing;

const newGame = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceImg.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
};

newGame();

const rollDice = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImg.src = `dice-${dice}.png`;
    if (diceImg.classList.contains("hidden"))
      diceImg.classList.remove("hidden");

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

const holdScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceImg.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
};

btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
btnNew.addEventListener("click", newGame);
