const btn = document.querySelector(".startBtn");
const numberOfGames = document.querySelector(".rightContainer__numbers > span");
const wins = document.querySelector(".rightContainer__wins > span");
const looses = document.querySelector(".rightContainer__losses > span");

const yourChoice = document.querySelector(".leftContainer__yourChoice > span");
const aiChoice = document.querySelector(".leftContainer__aiChoice > span");
const winner = document.querySelector(".leftContainer__winner > span");

const draws = document.querySelector(".rightContainer__draws > span");
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
const resetObjects = () => {
  game.playerSelection = "";
  game.aiSelection = "";
  game.winner = "";
  gameSummary.numbers = 0;
  gameSummary.wins = 0;
  gameSummary.losses = 0;
  gameSummary.draws = 0;
};
const writeResults = () => {
  yourChoice.textContent = game.playerSelection;
  aiChoice.textContent = game.aiSelection;
  winner.textContent = game.winner;
};
const writeSummary = () => {
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
    game.winner = "Draw";
  } else if (playerAnswer == "paper") {
    if (aiAnswer == "rock") {
      gameSummary.wins++;
      game.winner = "Player";
    }
    if (aiAnswer == "scissors") {
      gameSummary.losses++;
      game.winner = "Computer";
    }
  } else if (playerAnswer == "rock") {
    if (aiAnswer == "paper") {
      gameSummary.losses++;
      game.winner = "Computer";
    } else if (aiAnswer == "scissors") {
      gameSummary.wins++;
      game.winner = "Player";
    }
  } else if (playerAnswer == "scissors") {
    if (aiAnswer == "paper") {
      gameSummary.wins++;
      game.winner = "Player";
    } else if (aiAnswer == "rock") {
      gameSummary.looses++;
      game.winner = "Computer";
    }
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
  selectAnswers();
  assignAiChoice();
  //   resetObjects();
  compareAnswers();
  writeResults();
  writeSummary();
  gameSummary.numbers++;
  btn.addEventListener("click", playGame);
};
playGame();

// btn.addEventListener("click", () => {
//   if (!game.playerSelection) alert("Select one of three options!");
// });
