
let playerScore = 0;
let computerScore = 0;
    
function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing;
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection===computerSelection) {
        return ("It's a draw!");
    }
    else if (playerSelection==="rock" && computerSelection== "paper") {
        computerScore++;
        return ("You Lose! Paper beats rock");
    } 
    else if (playerSelection== "paper" && computerSelection==="rock"){
        playerScore++;
        return ("You Win! Paper beats rock");
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        return ("You Win! Rock beats scissors");
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        return ("You Lose! Rock beats scissors");
    }
    else if (playerSelection== "paper" && computerSelection==="scissors"){
        computerScore++;
        return ("You Lose! Scissors beat paper");
    }
    else if (playerSelection==="scissors" && computerSelection== "paper"){
        playerScore++;
        return ("You Win! Scissors beat paper");
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon");
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins");
    } else {
        console.log("It's a tie!");
    }
}

game();