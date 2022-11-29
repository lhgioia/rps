// We makin games

let getComputerChoice = function() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    if (randomNumber >= 0.33 && randomNumber <= 0.66) return "paper";
    if (randomNumber > 0.66) return "scissors";
}

