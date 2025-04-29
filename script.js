function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.createElement('div');
const playerScoreDisplay = document.createElement('p');
const computerScoreDisplay = document.createElement('p');
const finalResultDisplay = document.createElement('p');

function updateDisplay() {
    playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function displayRoundResult(message) {
    resultDiv.textContent = message;
}

function announceWinner() {
    if (humanScore === 5) {
        finalResultDisplay.textContent = "Why the fck are you playing against a damn robot and being happy about winning 🫵🤣🤓";
    } else if (computerScore === 5) {
        finalResultDisplay.textContent = "Negga imagine losing to a fking robot 🫵🤣🤡";
    }
    document.body.appendChild(finalResultDisplay);
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        displayRoundResult(`It's a tie! Both chose ${playerSelection}.`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        displayRoundResult(`You win! ${playerSelection} beats ${computerSelection}.`);
        humanScore++;
    } else {
        displayRoundResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
    }

    updateDisplay();

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
    console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}`);
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonsDiv = document.createElement('div');
    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    rockButton.value = 'rock';
    rockButton.classList.add('choice-button');

    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    paperButton.value = 'paper';
    paperButton.classList.add('choice-button');

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    scissorsButton.value = 'scissors';
    scissorsButton.classList.add('choice-button');

    buttonsDiv.appendChild(rockButton);
    buttonsDiv.appendChild(paperButton);
    buttonsDiv.appendChild(scissorsButton);
    document.body.appendChild(buttonsDiv);

    document.body.appendChild(playerScoreDisplay);
    document.body.appendChild(computerScoreDisplay);
    document.body.appendChild(resultDiv);

    updateDisplay(); // Initial display of scores

    rockButton.addEventListener('click', function() {
        playRound(this.value);
    });

    paperButton.addEventListener('click', function() {
        playRound(this.value);
    });

    scissorsButton.addEventListener('click', function() {
        playRound(this.value);
    });
});
