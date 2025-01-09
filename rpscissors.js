

// define function that produces a choice (RPS) for the computer
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}


// take input from the user as to their response
function playerPlay() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}



// compare the user's response to the computer's response 
// and determine the winner
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = "";
    if (player === computer) {
        result = "It's a tie!";
    } else if (player === "rock" && computer === "scissors") {
        result = "You win! Rock beats Scissors!";
    } else if (player === "rock" && computer === "paper") {
        result = "You lose! Paper beats Rock!";
    } else if (player === "paper" && computer === "rock") {
        result = "You win! Paper beats Rock!";
    } else if (player === "paper" && computer === "scissors") {
        result = "You lose! Scissors beats Paper!";
    } else if (player === "scissors" && computer === "paper") {
        result = "You win! Scissors beats Paper!";
    } else if (player === "scissors" && computer === "rock") {
        result = "You lose! Rock beats Scissors!";
    } else {
        result = "Invalid input. Please try again.";
    }
    return result;
}



// handles a game of 5 rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    while (computerScore < 5 && playerScore < 5) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame();