function getComputerChoice() {
  let selection = Math.ceil(Math.random() * 3);
  switch (selection) {
    case 1:
      return selection = "Rock";
    case 2:
      return selection = "Paper";
    case 3:
      return selection = "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {

  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Scissors":
          return 2;
        case "Paper":
          return 1;
        default:
          return 0;
      }

    case "Paper":
      switch (computerSelection) {
        case "Rock":
          return 2;
        case "Scissors":
          return 1;
        default:
          return 0;
      }

    case "Scissors":
      switch (computerSelection) {
        case "Paper":
          return 2;
        case "Rock":
          return 1;
        default:
          return 0;
      }
  }
}

function game() {
  let winsCounter = 0;
  let losesCounter = 0;

  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt("Introduce Paper, Scissors or Rock:").toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 2) {
      winsCounter++;
      console.log(`You Win the Round! Your ${playerSelection} beats computer's ${computerSelection}!`);
    } else if (roundResult === 1) {
      losesCounter++;
      console.log(`You Lose the Round! Computer's ${computerSelection} beats your ${playerSelection}!`);
    } else {
      console.log("This Round ends in a Draw!");
    }
  }

  if (winsCounter > losesCounter) {
    console.log(`You win the game for ${winsCounter} victories to ${losesCounter}!`)
  } else if (winsCounter < losesCounter) {
    console.log(`You lose the game for ${winsCounter} victories to ${losesCounter}!`)
  } else {
    console.log(`The game end in a ${winsCounter} victories Draw!`)
  }
}

game();