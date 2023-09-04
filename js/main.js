function getComputerChoice() {
  let selection = Math.ceil(Math.random() * 3);
  switch (selection) {
    case 1:
      selection = "Rock";
      break;
    case 2:
      selection = "Paper";
      break;
    case 3:
      selection = "Scissors";
      break;
    default:
      break;
  }
  return selection;
}

console.log(getComputerChoice());