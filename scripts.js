let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

let computerScoreboard = document.createElement("p");
let cpuScoreValue = document.createTextNode("Computer Score:"+computerScore);
let showChoice = document.createElement("p");
let textChoice = document.createTextNode("");

let playerScoreboard = document.createElement("p");
let playerScoreValue = document.createTextNode("Player Score:"+playerScore);

let board = document.querySelector(".score");
let narrator = document.createElement("p");
let text = document.createTextNode("Welcome! Choose an option: Rock, Paper or Scissors");


computerScoreboard.appendChild(cpuScoreValue);
playerScoreboard.appendChild(playerScoreValue);
narrator.appendChild(text);
showChoice.appendChild(textChoice);


board.appendChild(computerScoreboard);
board.appendChild(playerScoreboard);
board.appendChild(textChoice);
board.appendChild(narrator);








function computerPlay() {
    let x;
    x = Math.floor(Math.random() * 3); 
    if(x==0){
        textChoice.nodeValue = "CPU chooses Rock";
        return computerChoice = 0
    }
    if(x==1){
        textChoice.nodeValue = "CPU chooses Paper";
        return computerChoice = 1
    }
    if(x==2){
        textChoice.nodeValue = "CPU chooses Scissors";
         return computerChoice = 2
    }
}


function playRound(){
    if(computerChoice == playerChoice){
        text.nodeValue ="Draw!"
    }
    if(computerChoice == 0 && playerChoice == 1){
        text.nodeValue ="You win! Paper beats rock";
        playerScore++;
        playerScoreValue.nodeValue = "Player Score:"+playerScore;
    }
    if(computerChoice == 0 && playerChoice == 2){
        text.nodeValue ="You lose! Rock beats scissors";
        computerScore++;
        cpuScoreValue.nodeValue = "Computer Score:"+computerScore;
    }
    if(computerChoice == 1 && playerChoice == 0){
        text.nodeValue ="You lose! Paper beats rock";
        computerScore++;
        cpuScoreValue.nodeValue = "Computer Score:"+computerScore;
    }
    if(computerChoice == 1 && playerChoice == 2){
        text.nodeValue ="You win! Scissors beats paper";
        playerScore++;
        playerScoreValue.nodeValue = "Player Score:"+playerScore;
    }
    if(computerChoice == 2 && playerChoice == 0){
        text.nodeValue ="You win! Rock beats scissors";
        playerScore++;
        playerScoreValue.nodeValue = "Player Score:"+playerScore;
    }
    if(computerChoice == 2 && playerChoice == 1){
        text.nodeValue ="You lose! Scissors beats paper";
        computerScore++;
        cpuScoreValue.nodeValue = "Computer Score:"+computerScore;
    }

}

const bRock = document.querySelector('.buttonRock');
const bPaper = document.querySelector('.buttonPaper');
const bScissors = document.querySelector('.buttonScissors');

bRock.addEventListener("click", chooseRock);
bPaper.addEventListener("click", choosePaper);
bScissors.addEventListener("click", chooseScissors);


function chooseRock(){
    playerChoice = 0;
    computerPlay();
    playRound();
    endGame();
}
function choosePaper(){
    playerChoice = 1;
    computerPlay();
    playRound();
    endGame();
}
function chooseScissors(){
    playerChoice = 2;
    computerPlay();
    playRound();
    endGame();
}

function endGame(){
    if(computerScore == 5){
        text.nodeValue ="You lose! CPU reached 5 wins!";
        playerScore = 0;
        computerScore = 0;
        playerScoreValue.nodeValue = "Player Score:"+playerScore;
        cpuScoreValue.nodeValue = "Computer Score:"+computerScore;
        alert("CPU Wins");



    }
    if(playerScore == 5){
        text.nodeValue ="You win! Player reached 5 wins!";
        playerScore = 0;
        computerScore = 0;
        playerScoreValue.nodeValue = "Player Score:"+playerScore;
        cpuScoreValue.nodeValue = "Computer Score:"+computerScore;
        alert("Player Wins");

    }
}

