const btn = document.querySelector(".startBtn");
const numberOfGames = document.querySelector(".rightContainer__numbers > span");
const wins = document.querySelector(".rightContainer__wins > span");
const looses = document.querySelector(".rightContainer__losses > span");

const yourChoice = document.querySelector(".leftContainer__yourChoice");
const aiChoice = document.querySelector(".leftContainer__aiChoice");
const winner = document.querySelector(".leftContainer__winner");

const draws = document.querySelector(".leftContainer__yourChoice");
const choiceArray = [...document.querySelectorAll(".choiceContainer__item")];
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
};
const game = {
  playerSelection: "",
  aiSelection: "",
  winner: ""
};

const writeCurrentChoices = () => {
  yourChoice.textContent = game.playerSelection;
  aiChoice.textContent = game.aiSelection;
  winner.textContent = game.winner;
};
const writeResults = () => {
  numberOfGames.textContent = gameSummary.numbers;
  wins.textContent = gameSummary.wins;
  looses.textContent = gameSummary.losses;
  draws.textContent = gameSummary.draws;
};
const compareAnswers = () => {
  const playerAnswer = game.playerSelection;
  const aiAnswer = game.aiSelection;

  if (playerAnswer == aiAnswer) {
    gameSummary.draws++;
    console.log("AI:" + aiAnswer);
  } else if (playerAnswer == "paper" && aiAnswer == "scissors") {
    gameSummary.losses++;
    console.log("AI: " + aiAnswer);
  } else if (playerAnswer == "rock" && aiAnswer == "paper") {
    gameSummary.losses++;
    console.log("AI: " + aiAnswer);
  } else if (playerAnswer == "rock" && aiAnswer == "scissors") {
    gameSummary.wins++;
    game.winner = "Player";
    console.log("AI: " + aiAnswer);
  } else {
    gameSummary.wins++;
    game.winner = "Player";
    console.log("AI: " + aiAnswer);
  }
};
const assignAiChoice = () => {
  const randomNr = Math.floor(Math.random() * 3);
  game.aiSelection = choiceArray[randomNr].dataset.option;
};
const selectAnswers = () => {
  choiceArray.forEach(el => {
    el.addEventListener("click", e => {
      game.playerSelection = e.target.dataset.option;
      choiceArray.forEach(e => {
        e.style.borderColor = "";
      });
      e.target.style.borderColor = "red";
    });
  });
};

const playGame = () => {
  gameSummary.numbers++;
  selectAnswers();
  assignAiChoice();
  compareAnswers();
  writeCurrentChoices();
  writeResults();
  btn.addEventListener("click", playGame);
};
playGame();

btn.addEventListener("click", () => {
  if (!game.playerSelection) alert("Select one of three options!");
});
