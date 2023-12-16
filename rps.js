const playerSelection = prompt("What's your selction?");

const computerSelection = getComputerChoice();

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    // Pick a random choice (Rock, Paper, or Scissors) for the computer.
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
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

const result = playRound(playerSelection, computerSelection);
console.log("Player selected " + playerSelection);
console.log("Computer selected " + computerSelection);
console.log(result);





