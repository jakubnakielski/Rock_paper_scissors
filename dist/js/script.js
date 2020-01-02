const btn = document.querySelector(".startBtn");
const results = document.querySelector(".rightContainer");
const choiceArray = [...document.querySelectorAll(".choiceContainer__item")];
const gameSummary = {
  numbers: "0",
  wins: "0",
  losses: "0",
  draws: "0"
};
const game = {
  playerSelection: "",
  aiSelection: ""
};

const compareAnswers = () => {
  const playerAnswer = game.playerSelection;
  const aiAnswer = game.aiSelection;

  //   console.log(playerAnswer, aiAnswer);
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
    console.log("AI: " + aiAnswer);
  } else {
    gameSummary.wins++;
    console.log("AI: " + aiAnswer);
  }
};
const getRandomAnswer = () => {
  const randomNr = Math.floor(Math.random() * 3);
  game.aiSelection = choiceArray[randomNr].dataset.option;
};

const selectAnswer = function() {
  game.playerSelection = this.dataset.option;

  choiceArray.forEach(e => {
    e.style.borderColor = "";
  });
  this.style.borderColor = "red";
};

const playGame = () => {
  choiceArray.forEach(el => {
    el.addEventListener("click", selectAnswer);
  });

  getRandomAnswer();
  compareAnswers();
  writeResults();
};

btn.addEventListener("click", playGame);
