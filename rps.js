
let answer = prompt("Please type your selection");


const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
   
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}


let computerSelection = getComputerChoice();
console.log("Computer choice: " + computerSelection);


function playRound(answer, computerSelection) {
    
    const player = answer.toLowerCase();
    const computer = computerSelection.toLowerCase();

  
    if (player === computer) {
        return "It's a tie!";
    }

   
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `You Win! ${player} beats ${computer}`;
    }

    
    return `You Lose! ${computer} beats ${player}`;
}


const result = playRound(answer, computerSelection);
console.log(result);