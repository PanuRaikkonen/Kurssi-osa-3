const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

const guessCount = 10;
const minAnswer = 0;
const maxAnswer = 100;
let guessAmount = 1;
let timer;

const createNumber = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

const randomNumber = createNumber(minAnswer, maxAnswer);

const checkGuess = (userGuess, randomNumber) => {
  userGuess = Number(guessField.value);
  guessField.value = "";
  if (guessAmount <= guessCount) {
    if (userGuess === randomNumber) {
      lastResult.textContent = "Correct Answer!";
      // console.log(userGuess);
    } else {
      lastResult.textContent = "Wrong, Try Again";
      guesses.textContent += "" + guessField;
      guessAmount++;
    }
  } else {
    lastResult.textContent = "Game Over";
  }
};
console.log(randomNumber);

guessSubmit.addEventListener("click", () => {
  if (guessAmount === 1) {
    timer = Date.now();
  }
  checkGuess(Number(guessField.value), randomNumber);
});
