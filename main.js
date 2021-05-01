
function computerPlay() {
    const choice = Math.floor(Math.random() * 3); 
    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection, gameScore) {
    // Make player choice case-insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1).toLowerCase();

    // Tie 
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    // Player win 
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        gameScore["playerScore"]++;
        return "You win! Rock beats Scissors";
    }

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        gameScore["playerScore"]++;
        return "You win! Paper beats Rock";
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        gameScore["playerScore"]++;
        return "You win! Scissors beats Paper";
    }

    // Player lose 
    gameScore["computerScore"]++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {

    let gameScore = {playerScore: 0, computerScore: 0};

    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt("Choose Rock, Paper or Scissors");
        const computerChoice = computerPlay();

        const roundResult = playRound(playerChoice, computerChoice, gameScore);
        console.log(roundResult);
        console.log(gameScore["playerScore"]);
        console.log(gameScore["computerScore"]);
    }

    if (gameScore["playerScore"] > gameScore["computerScore"]) {
        console.log(`You won with ${gameScore["playerScore"]} against ${gameScore["computerScore"]}`);
    }
    else if (gameScore["playerScore"] < gameScore["computerScore"]) {
        console.log(`You lost with ${gameScore["computerScore"]} against ${gameScore["playerScore"]}`);
    }
    else {
        console.log("It's a tie!");
    }
}
