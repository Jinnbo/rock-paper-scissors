// Variables
const rockBtn = document.getElementById('rockBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const paperBtn = document.getElementById('paperBtn');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const playerPlaceholder = document.getElementById('playerPlaceholder');
const computerPlaceholder = document.getElementById('computerPlaceholder');

// Event listeners
rockBtn.addEventListener("click", () => handleClick('ROCK'));
scissorsBtn.addEventListener("click", () => handleClick('SCISSORS'));
paperBtn.addEventListener("click", () => handleClick('PAPER'));

// Global Variables
let rounds = 0;
let pScore = 0;
let cScore = 0;

// Playround- logic for who won 
function playRound(computerChoice, playerChoice){

    // If player chooses rock
    if (playerChoice == 'ROCK'){
        switch(computerChoice){
            case 'ROCK':
                console.log("tie");
                break;
            case 'PAPER':
                cScore++;
                console.log("lose");
                break;
            case 'SCISSORS':
                pScore++;
                console.log("win");
                break;
        }   
    }

    // Player chooses paper
    else if (playerChoice == 'PAPER'){
        switch(computerChoice){
            case 'ROCK':
                console.log("win");
                pScore++;
                break;
            case 'PAPER':
                console.log("tie");
                break;
            case 'SCISSORS':
                cScore++;
                console.log("lose");
                break;
        }   
    }

    // Player chooses scissors
    else{
        switch(computerChoice){
            case 'ROCK':
                console.log("lose");
                cScore++;
                break;
            case 'PAPER':
                console.log("win");
                pScore++;
                break;
            case 'SCISSORS':
                console.log("tie");
                break;
        }  
    }

    // Call update score
    updateScores();
}

// Update score and choice
function updateScores(){
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

// Randomized computer choice
function computerSelection(){

    // Choose random num from 0-2
    let num = Math.floor(Math.random() * 3);

    // Associate 0-2 with rock,paper,scissors
    switch(num){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// Update player and computer placeholder
function updatePlaceholders(computer, player){

    // Update Player Placeholder
    switch(player){
        case 'ROCK':
            console.log("ROCK");
            playerPlaceholder.src="./imgs/rock.png";
            break;

        case 'PAPER':
            playerPlaceholder.src="./imgs/paper.png";
            break;

        case 'SCISSORS':
            playerPlaceholder.src="./imgs/scissors.png";
            break;
    }

    // Update Computer Placeholder
    switch(computer){
        case 'ROCK':
            computerPlaceholder.src="./imgs/rock.png";
            break;

        case 'PAPER':
            computerPlaceholder.src="./imgs/paper.png";
            break;

        case 'SCISSORS':
            computerPlaceholder.src="./imgs/scissors.png";
            break;
    }
}

// Player Choice
function handleClick(playerChoice){

    // Get Player Choice
    let computerChoice = computerSelection();

    // Call update player and computer placeholder
    updatePlaceholders(computerChoice,playerChoice);

    // Call playround
    playRound(computerChoice,playerChoice);

}