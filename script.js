
function computerPlay(){

    // Options
    const options = ["rock","paper","scissors"];

    // Choose one of the options 
    let chosenOption = options[Math.floor(Math.random()*options.length)];

    // Return chosen option
    return chosenOption;
}


function playRound(playerSelection,computerSelection){

    if (playerSelection == computerSelection) return ["Tie"];
    
    else if (playerSelection == "rock" && computerSelection == "paper") return ["Paper beats rock. You lose",false];
    else if (playerSelection == "rock" && computerSelection == "scissors") return ["Rock beats scissors. You win",true];
    
    else if (playerSelection == "paper" && computerSelection == "scissors") return ["Scissors beat paper. You lose",false];
    else if (playerSelection == "paper" && computerSelection == "rock") return ["Paper beats rock. You win",true];
    
    else if (playerSelection == "scissors" && computerSelection == "rock") return ["Rock beats scissors. You lose",false];
    else if (playerSelection == "scissors" && computerSelection == "paper") return ["Scissors beat paper. You win",true];
    
}

function game(){
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0;i<5;i++){
        //let playerSelection = prompt("Rock Paper Scissors: ").toLowerCase();
        let computerSelection = computerPlay();

        let res = playRound(playerSelection,computerSelection);

        console.log(res[0]);
        

        if (res[0] == "tie"){
            console.log(`Player-score: ${playerScore}  Computer-score: ${computerScore}`);
        }
        else if(res[1] == true){
            playerScore++;
            console.log(`Player-score: ${playerScore}  Computer-score: ${computerScore}`);
        } 
        else{
            computerScore++;
            console.log(`Player-score: ${playerScore}  Computer-score: ${computerScore}`);
        } 
    }

    if (playerScore > computerScore){
        console.log("YOU WIN!");
    }
    else{
        console.log("YOU LOSE :c")
    }
}


game();