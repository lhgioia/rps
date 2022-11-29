// We makin games

let getComputerChoice = function() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    if (randomNumber >= 0.33 && randomNumber <= 0.66) return "paper";
    if (randomNumber > 0.66) return "scissors";
};

let playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) return "It's a tie. Play again.";
    if (playerSelection == "rock" && computerSelection == "paper") return "Paper beats rock. You lose this round.";
    if (playerSelection == "rock" && computerSelection == "scissors") return "Rock beats scissors. You win this round.";
    if (playerSelection == "paper" && computerSelection == "scissors") return "Scissors beats paper. You lose this round.";
    if (playerSelection == "paper" && computerSelection == "rock") return "Paper beats rock. You win this round.";
    if (playerSelection == "scissors" && computerSelection == "rock") return "Rock beats scissors. You lose this round.";
    if (playerSelection == "scissors" && computerSelection == "paper") return "Scissors beats paper. You win this round.";
};

let game = function(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose rock, paper, or scissors", "rock");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
};