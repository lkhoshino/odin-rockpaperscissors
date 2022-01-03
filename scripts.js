function computerPlay() {
    let x;
    x = Math.floor(Math.random() * 3); 
    if(x==0){
        console.log("Rock");
    }
    if(x==1){
        console.log("Paper");
    }
    if(x==2){
        console.log("Scissors");
    }
}

function playerSelection() {
    let choice = prompt().toLowerCase;
}

computerPlay();
playerSelection();