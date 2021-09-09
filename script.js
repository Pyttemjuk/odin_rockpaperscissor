"use strict";

const capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};

// Get random choice of paper, rock or scissor
const computerPlay = function () {
  const random = Math.trunc(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
};

// Play a round of rock, paper, scissor
const playRound = function (playerSelection, computerSelection) {
  const winMessage = `You win, ${capitalize(
    playerSelection
  )} beats ${capitalize(computerSelection)}`;

  const looseMessage = `You loose, ${capitalize(
    computerSelection
  )} beats ${capitalize(playerSelection)}`;

  // Check player selection against computer selection
  // according to rock, paper, scissor rules
  if (playerSelection === computerSelection) {
    return `It's a draw, you both chose ${capitalize(playerSelection)}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      return winMessage;
    } else {
      return looseMessage;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return winMessage;
    } else {
      return looseMessage;
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      return winMessage;
    } else {
      return looseMessage;
    }
  } else {
    return "Invalid input";
  }
};

// Get user input from prompt
const userSelection = prompt("Choose rock, paper or scissor").toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(userSelection, computerSelection));
