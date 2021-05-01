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

function playRound(playerSelection, computerSelection) {
    // Make player choice case-insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1).toLowerCase();

    // Tie 
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    // Player win 
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win! Rock beats Scissors"; 
    }

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats Rock";  
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper"; 
    }

    // Player lose 
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
    
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function updateGame(e) {
    const playerChoice = e.target.innerText;
    const computerChoice = computerPlay();

    const roundResult = playRound(playerChoice, computerChoice);
    console.log(roundResult);

    updatePage(roundResult);

    roundCount++;
}

function updatePage(roundResult) {
    pGameOver = document.querySelector("#gameover");
    pGameOver.innerText = '';

    pRoundResult = document.querySelector("#status");
    pRoundResult.innerText = `Round ${roundCount}: ` + roundResult;

    pPlayerScore = document.querySelector("#playerscore");
    pPlayerScore.innerText = "Player score: " + playerScore;

    pComputerScore = document.querySelector("#computerscore");
    pComputerScore.innerText = "Computer score: " + computerScore;

    // Game Over
    if (roundCount >= 5) {
        if (playerScore > computerScore) {
            pGameOver.innerText = `You won with ${playerScore} against ${computerScore}`;
        }
        else if (playerScore < computerScore) {
            pGameOver.innerText = `You lost with ${computerScore} against ${playerScore}`;
        }
        else {
            pGameOver.innerText = "It's a tie!";
        }
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}

buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', updateGame));