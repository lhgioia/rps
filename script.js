// We makin games

let getComputerChoice = function() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) return "rock";
    if (randomNumber > 0.33 && randomNumber <= 0.66) return "paper";
    if (randomNumber > 0.66) return "scissors";
};

let message = "";
let playerWins = 0;
let computerWins = 0;
let playerSelection = ""

let resetGame = function() {
    message = "";
    playerWins = 0;
    computerWins = 0;
    playerSelection = ""
}

const resultsDiv = document.querySelector('.resultsDiv');

const rpsChoiceButtons = document.querySelectorAll('.rpsChoiceButton');

rpsChoiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerWins == 5 || computerWins == 5) {
            resetGame();
        }
        // playerSelection = button.id;
        playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        resultsDiv.textContent = message;
    });
});

let playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {

        message = "This round is a tie. Both players chose " + playerSelection + ". " + 
        "The score is " + playerWins + " - " + computerWins;

    };
    if (playerSelection == "rock" && computerSelection == "paper" || 
        playerSelection == "paper" && computerSelection == "scissors" || 
        playerSelection == "scissors" && computerSelection == "rock") {
        
        computerWins = computerWins + 1;

        if (computerWins == 5) {
            message = "Game over. The computer won the game " + playerWins + " - " + computerWins;
        } else {
            message = "The computer wins this round. " + playerSelection + " loses to " + computerSelection + ". " + 
            "The score is " + playerWins + " - " + computerWins;
        };
    };
    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {

        playerWins = playerWins + 1;

        if (playerWins == 5) {
            message = "Congratulations! You beat the computer " + playerWins + " - " + computerWins;
        } else {
            message = "You win this round! " + playerSelection + " beats " + computerSelection + ". " + 
            "The score is " + playerWins + " - " + computerWins;
        };
    };
};