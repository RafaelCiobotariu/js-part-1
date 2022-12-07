alert(
  'Hello.  This is a "Rock, paper, scissors" game. You will have to select the one of the choices above and after that, the computer will give one random answer, from the choices above. '
);

let gameRunning;

function playerPlay() {
  let playerChoice = prompt('insert a value from "rock" "paper" "scissors"');
  let exitGame;
  if (playerChoice == null) {
    exitGame = prompt("You really want to exit the game? \n Write 'yes'");
  }
  if (exitGame === "yes") {
    gameRunning = 0;
  }
  // console.log(gameRunning);
  if (gameRunning !== 0) {
    playerChoice = playerChoice.toLowerCase().trim();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      console.log(
        "You inserted a wrong word, please refresh the page to play again!"
      );
      playerPlay();
    }

    console.log(playerChoice);
    return playerChoice;
  } else {
    // console.log(gameRunning);
    alert("Game Finished");
  }
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
  if (gameRunning !== 0) {
    for (let i = 0; i < numberOfRunds; i++) {
      console.log(`Round ${i}:`);
      let gameResult = playRound(playerPlay(), computerPlay());
      if (gameResult === "Player won!") {
        playerScore++;
      } else if (gameResult === "Computer won!") {
        computerScore++;
      } else if (gameResult === "Draw!") {
        console.log("No points added because it was a draw");
      } else {
        console.log("No points added because some problems");
      }
      console.log("\n");
    }
    console.log(
      "Player score: " +
        playerScore +
        " ---- " +
        computerScore +
        " Computer score"
    );
  }
}

game(5);
