"use strict";

const imagesEl = document.querySelectorAll(".image");
const messageEl = document.querySelector(".message");
const scorePlayerEl = document.querySelector(".score-player");
const scoreComputerEl = document.querySelector(".score-computer");
const winnerEl = document.querySelector(".winner");

let scorePlayer, scoreComputer, playing;

// Helper function
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function init() {
  scorePlayer = 0;
  scoreComputer = 0;
  playing = true;
  messageEl.textContent = "Click image to play";
}
init();

// Get random choice of paper, rock or scissor
function computerSelect() {
  const random = Math.trunc(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playerSelect() {
  let playerSelection = "";

  imagesEl.forEach((image) => {
    image.addEventListener("click", function () {
      if (playing) {
        if (image.classList.contains("rock")) {
          playerSelection = "rock";
        } else if (image.classList.contains("paper")) {
          playerSelection = "paper";
        } else if (image.classList.contains("scissors")) {
          playerSelection = "scissors";
        }
        playRound(playerSelection);
      }
    });
  });
}
playerSelect();

function playRound(playerSelection) {
  const computerSelection = computerSelect();

  const winMessage = `You win, ${capitalize(
    playerSelection
  )} beats ${capitalize(computerSelection)}`;

  const looseMessage = `You loose, ${capitalize(
    computerSelection
  )} beats ${capitalize(playerSelection)}`;

  const drawMessage = `It's a draw, you both chose ${capitalize(
    playerSelection
  )}`;

  //Check player selection against computer selection
  // according to rock, paper, scissor rules
  if (playerSelection === computerSelection) {
    messageEl.textContent = drawMessage;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      messageEl.textContent = winMessage;
      scorePlayer++;
    } else {
      messageEl.textContent = looseMessage;
      scoreComputer++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      messageEl.textContent = winMessage;
      scorePlayer++;
    } else {
      messageEl.textContent = looseMessage;
      scoreComputer++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      message.textContent = winMessage;
      scorePlayer++;
    } else {
      message.textContent = looseMessage;
      scoreComputer++;
    }
  }

  if (scorePlayer === 5 || scoreComputer === 5) {
    playing = false;
    winnerEl.textContent = `${
      scorePlayer === 5 ? "Player win!" : "Computer win!"
    }`;
  }

  scoreComputerEl.textContent = scoreComputer;
  scorePlayerEl.textContent = scorePlayer;
}
