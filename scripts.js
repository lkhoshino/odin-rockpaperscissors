let computerChoice;
let playerChoice;

function computerPlay() {
    let x;
    x = Math.floor(Math.random() * 3); 
    if(x==0){
        return computerChoice = 0
    }
    if(x==1){
        return computerChoice = 1
    }
    if(x==2){
         return computerChoice = 2
    }
}

function playerSelection() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    if(choice =="rock"){
        return playerChoice = 0 
    }
    if(choice =="paper"){
        return playerChoice = 1
    }
    if(choice =="scissors"){
        return playerChoice = 2
    }
}

function playRound(){
    if(computerChoice == playerChoice){
        console.log("Draw!");
    }
    if(computerChoice == 0 && playerChoice == 1){
        console.log("You win! Paper beats rock");
    }
    if(computerChoice == 0 && playerChoice == 2){
        console.log("You lose! Rock beats scissors");
    }
    if(computerChoice == 1 && playerChoice == 0){
        console.log("You lose! Paper beats rock")
    }
    if(computerChoice == 1 && playerChoice == 2){
        console.log("You win! Scissors beats paper")
    }
    if(computerChoice == 2 && playerChoice == 0){
        console.log("You win! Rock beats scissors")
    }
    if(computerChoice == 2 && playerChoice == 1){
        console.log("You lose! Scissors beats paper")
    }
}
function game(){
    let computerScore = 0;
    let playerScore = 0;

    while(computerScore <5 || playerScore<5){
        playRound();
    }

}

computerPlay();
playerSelection();
playRound();
console.log(computerChoice);
console.log(playerChoice);