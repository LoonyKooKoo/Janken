let player = 0;
let comp = 0;
const score = document.querySelector('#scoreboard');
const winnerImg  = document.querySelector('#winnner-pic');
const winnerTxt = document.querySelector('#winner');
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector('#reset');
const rockImg = document.createElement('img');
const paperImg = document.createElement('img');
const scissorsImg = document.createElement('img');
rockImg.classList.add('compImg');
paperImg.classList.add('compImg');
scissorsImg.classList.add('compImg');
rockImg.src = document.getElementById("rock").src;
paperImg.src = document.getElementById("paper").src;
scissorsImg.src = document.getElementById("scissors").src;


function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
      case 0:
        /*console.log("rock")
        winnerImg.appendChild('rockImg')*/
        return "rock";
      case 1:
       /*console.log("paper")
       winnerImg.appendChild('paperImg');*/
        return "paper";
      case 2:
       /*console.log("scissors")
       winnerImg.appendChild('scissorsImg');*/
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
        winnerTxt.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        scoreboard();
        gameEndCases();
        return;
    } else if (p === c) {
        winnerTxt.textContent = "Draw! " + playerSelection + " on " + computerSelection;
        return;
    } else {
        comp++
        winnerTxt.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        scoreboard();
        gameEndCases();
        return;
    }
}

function gameEndCases() {
        if (player === 5) {
            winnerTxt.textContent = "Game over! Player Wins!";
            return;
        } else if (comp === 5){
            winnerTxt.textContent =  "Game over! You Lose!";
        }
}

function reset() {
    player = 0;
    comp = 0;
    scoreboard();
    winnerTxt.textContent = "";
}

function scoreboard() {
    score.textContent = "Player: "+ player + " Computer: " + comp;
}

rockBtn.addEventListener("click", function () { playRound(computerPlay(), "rock"); });
paperBtn.addEventListener("click", function () { playRound(computerPlay(), "paper"); });
scissorsBtn.addEventListener("click", function () { playRound(computerPlay(), "scissors"); });
resetBtn.addEventListener( "click", reset);