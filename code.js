let player = 0;
let comp = 0;
function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
      case 0:
        /*console.log("rock")*/
        return "rock";
      case 1:
       /*console.log("paper")*/
        return "paper";
      case 2:
       /*console.log("scissors")*/
        return "scissors";
    }
  }

function playRound(computerSelection, playerSelection) {
    let p;
    let c;
    switch(computerSelection){
        case "rock":
            /*console.log("c0")*/
            c = 0;
            break;
        case "paper":
            /*console.log("c1")*/
            c = 1;
            break;
        case "scissors":
            /*console.log("c2")*/
            c = 2;
            break;
    }
    switch(playerSelection.toLowerCase()){
        case "rock":
            /*console.log("p0")*/
            p = 0;
            break;
        case "paper":
            /*console.log("p1")*/
            p = 1;
            break;
        case "scissors":
            /*console.log("p2")*/
            p = 2;
            break;
        default:
            console.log("Not a valid option. Choose again!");
    }
    if ((p === c+1) || (p === c-2)){
        player++
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (p === c) {
        return "Draw! " + playerSelection + " on " + computerSelection;
    } else {
        comp++
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    player = 0;
    comp = 0;
    for (let i = 0; i<5; i++){
        console.log(playRound(computerPlay(),prompt()));
        console.log("Player: "+ player + " Computer: " + comp);
        if (player === 3) {
            return "Player Wins!"
        } else if (comp === 3){
            return "You Lose!"
        }
    }
}