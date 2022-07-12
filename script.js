// Variables
const rockBtn = document.getElementById('rockBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const paperBtn = document.getElementById('paperBtn');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const playerPlaceholder = document.getElementById('playerPlaceholder');
const computerPlaceholder = document.getElementById('computerPlaceholder');
const gameOver = document.getElementById('gameoverScreen');
const overlay = document.getElementById('overlay');
const gameoverMsg = document.getElementById('gameoverMsg');
const btnRestart = document.getElementById('btnRestart');

// Audio
const audio = document.getElementById('tink');
const winSound = document.getElementById('win');
const loseSound = document.getElementById('lose');
winSound.volume = 0.05;
loseSound.volume = 0.05;

// Event listeners
rockBtn.addEventListener("click", () => handleClick('ROCK'));
scissorsBtn.addEventListener("click", () => handleClick('SCISSORS'));
paperBtn.addEventListener("click", () => handleClick('PAPER'));
btnRestart.addEventListener("click", () => gameReset());

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

// Update score and choice
function updateScores(){
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
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
        case 'PLACEHOLDER':
            playerPlaceholder.src="./imgs/placeholder.png";
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
        case 'PLACEHOLDER':
            computerPlaceholder.src="./imgs/placeholder.png";
            break;
    }
}

// Check game over function
function isGameover(){
    return (cScore == 5 || pScore == 5);
}

// Game over screen
function gameoverScreen(){

    // Display game over screen
    pScore == 5 ? gameoverMsg.textContent = "YOU WON" :  gameoverMsg.textContent = "YOU LOSS";
    gameOver.classList.add('active');
    overlay.classList.add('active');
}

function gameReset(){
    
    // Remove game over screen
    gameOver.classList.remove('active');
    overlay.classList.remove('active');

    // Reset variables 
    cScore = 0;
    pScore = 0;
    updateScores();
    updatePlaceholders('PLACEHOLDER','PLACEHOLDER');

}

// Play end sound track
function endSoundtrack(){
    pScore == 5 ? winSound.play() : loseSound.play();
}

// Player Choice
function handleClick(playerChoice){

    if (isGameover()){

        // Play winning/losing soundtrack
        endSoundtrack();

        // Call popup function
        gameoverScreen();
        

        // Call reset game function

    }
    else{

        // Play tink sound when player chooses option
        audio.play();
        
        // Get Player Choice
        let computerChoice = computerSelection();
        
        // Call update player and computer placeholder
        updatePlaceholders(computerChoice,playerChoice);
        
        // Call playround
        
        playRound(computerChoice,playerChoice);
    }   

}

/*
    TODO:
- First to 5 wins 
- Reset game when someone reaches 5
- Create popup menu for winning/losing
- Add sound effect when clicking buttons
- Make UI look better



*/