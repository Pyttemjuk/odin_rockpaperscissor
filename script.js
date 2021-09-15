"use strict";

let scorePlayer = 0;
let scoreComputer = 0;

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
    console.log(`It's a draw, you both chose ${capitalize(playerSelection)}`);
    return "draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      console.log(winMessage);
      return "winner";
    } else {
      console.log(looseMessage);
      return "looser";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log(winMessage);
      return "winner";
    } else {
      console.log(looseMessage);
      return "looser";
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      console.log(winMessage);
      return "winner";
    } else {
      console.log(looseMessage);
      return "looser";
    }
  } else {
    return "Invalid input";
  }
};

const game = function () {
  let playing = true;

  while (playing) {
    const userSelection = prompt("Choose rock, paper or scissor").toLowerCase();
    const computerSelection = computerPlay();
    const check = playRound(userSelection, computerSelection);

    check === "winner" ? scorePlayer++ : scoreComputer++;

    if (scorePlayer === 5) {
      playing = false;
      console.log(`Player win!`);
    } else if (scoreComputer === 5) {
      playing = false;
      console.log(`Computer win!`);
    }
  }
};

const capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};

game();
