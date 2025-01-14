
document.addEventListener("DOMContentLoaded", function() {
    const buttons = ["rock", "paper", "scissors"];
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("score");
    document.body.appendChild(resultDiv);
    document.body.appendChild(scoreDiv);

    resultDiv.innerText = "Choose Rock, Paper, or Scissors!";
    scoreDiv.innerText = "Player: 0 Computer: 0";
    let playerScore = 0;
    let computerScore = 0;

    let playAgain = document.createElement("button");
    playAgain.innerText = "Play Again";
    playAgain.addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0;
        resultDiv.innerText = "Choose Rock, Paper, or Scissors!";
        scoreDiv.innerText = "Player: 0 Computer: 0";
        resultDiv.classList.remove("win");
        resultDiv.classList.remove("lose");
        buttons.forEach(choice => {
            document.querySelector(`button.${choice}`).style.display = "block";
        });
        playAgain.style.display = "none";
    });
    document.body.appendChild(playAgain);
    playAgain.style.display = "none";


    function updateScore(result) {
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        scoreDiv.innerText = "Player: " + playerScore + " Computer: " + computerScore;
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                resultDiv.classList.add("win");
                resultDiv.innerText = "You win the game! Play again?";
            } else {
                resultDiv.classList.add("lose");
                resultDiv.innerText = "You lose the game! Try again?";
            }

            buttons.forEach(choice => {
                document.querySelector(`button.${choice}`).style.display = "none";
            });
            playAgain.style.display = "block";
            
        }
    }
    



    buttons.forEach(choice => {
        let button = document.createElement("button");
        button.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
        button.classList.add(choice);
        button.addEventListener("click", function() {
            let playerSelection = choice;
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            resultDiv.innerText = result;
            updateScore(result);
        });
        document.body.appendChild(button);
        document.body.appendChild(document.createElement("br"));
    });
});

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
// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     while (computerScore < 5 && playerScore < 5) {
//         let playerSelection = playerPlay();
//         let computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if (result.includes("win")) {
//             playerScore++;
//         } else if (result.includes("lose")) {
//             computerScore++;
//         }
//         console.log("Player: " + playerScore + " Computer: " + computerScore);
//     }
//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else {
//         console.log("You lose the game!");
//     }
// }

// playGame();