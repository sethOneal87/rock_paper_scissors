const playerButtons = document.querySelectorAll('button');
const scoreElement = document.getElementById('score');
const roundResultElement = document.getElementById('roundResult');
const finalResultElement = document.getElementById('finalResult');

let playerScore = 0;
let computerScore = 0;

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id.toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        updateResults(playerScore, computerScore, result);

        if (playerScore === 5 || computerScore === 5) {
            displayFinalResult(playerScore, computerScore);
        }
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function updateResults(playerScore, computerScore, roundResult) {
    scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    roundResultElement.textContent = `Round: ${roundResult}`;
}

function displayFinalResult(playerScore, computerScore) {
    finalResultElement.textContent = `Final Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}\n`;

    if (playerScore > computerScore) {
        finalResultElement.textContent += "Congratulations! You win the game!";
    } else if (computerScore > playerScore) {
        finalResultElement.textContent += "Computer wins the game. Better luck next time!";
    } else {
        finalResultElement.textContent += "It's a tie! The game is drawn.";
    }

    playerScore = 0;
    computerScore = 0;
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("What's your selection?");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        updateResults(playerScore, computerScore, result);
    }

    displayFinalResult(playerScore, computerScore);
}