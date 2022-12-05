function playerPlay() {
  var playerChoice = prompt('insert a value from "rock" "paper" "scissors"');
  playerChoice = playerChoice.toLowerCase().trim();
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    return console.log(
      "You inserted a wrong word, please refresh the page to play again!"
    );
  }
  console.log(playerChoice);
  return playerChoice;
}

function computerPlay() {
  const rndInt = Math.floor(Math.random() * 3) + 1;
  switch (rndInt) {
    case 1:
      console.log("Rock");
      return "Rock";
    case 2:
      console.log("Paper");
      return "Paper";
    case 3:
      console.log("Scissors");
      return "Scissor";
    default:
      console.log("there was a problem with the computer choice");
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "Paper") {
        result = "Computer won!";
      } else if (computerSelection === "Rock") {
        result = "Draw!";
      } else {
        result = "Player won!";
      }
      break;
    case "paper":
      if (computerSelection === "Paper") {
        result = "Draw!";
      } else if (computerSelection === "Rock") {
        result = "Player won!";
      } else {
        result = "Computer won!";
      }
      break;
    case "scissors":
      if (computerSelection === "Paper") {
        result = "Player won!";
      } else if (computerSelection === "Rock") {
        result = "Computer won!";
      } else {
        result = "Draw!";
      }
      break;
    default:
      result = "The result wasnt present";
      break;
  }
  console.log(result);
  return result;
}

function game(numberOfRunds) {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 0; i < numberOfRunds; i++) {
    let gameResult = playRound(playerPlay(), computerPlay());
    if (gameResult === "Player won!") {
      playerScore++;
    } else if (gameResult === "Computer won!") {
      computerScore++;
    } else {
      console.log("No points added because it was a draw");
    }
    console.log("\n");
  }
  console.log(playerScore + " " + computerScore);
}

game(4);
