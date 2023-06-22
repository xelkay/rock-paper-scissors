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
        return ("You Lose! Paper beats rock");
    } 
    else if (playerSelection== "paper" && computerSelection==="rock"){
        return ("You Win! Paper beats rock");
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        return ("You Win! Rock beats scissors");
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return ("You Lose! Rock beats scissors");
    }
    else if (playerSelection== "paper" && computerSelection==="scissors"){
        return ("You Lose! Scissors beat paper");
    }
    else if (playerSelection==="scissors" && computerSelection== "paper"){
        return ("You Win! Scissors beat paper");
    }
}
    let playerSelection = prompt("Choose your weapon");
    let computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));