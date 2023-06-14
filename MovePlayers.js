
const scoreBoard = document.querySelector(".header5");
const header = document.querySelector("h1");
const player1Score = document.getElementById("score-player1");
const player2Score = document.getElementById("score-player2");
//what does this code do? user clicks button to begin
//then program decides which player's turn it is in function called switchPlayer
//it then calls function throwdice and passes in char (red or blue) into function
//throw dice first randomizes number from 1 to 6, it calls function called DicePicture in dice.js
//which decides which picture to display based on random number
//it then defines destination cell which is starting cell plus the dice number
//it moves the charachter one div at a time to the destination cell in function move
//it also checks the destination number if it is a snake or a ladder then calls snakes snakesLadder.js which specifies the path of the snake or the ladder.
//until one charachter wins.


let red = {
  name: "player1",
  startingCell: 0,
  destinationCell: 0,
  playerNum: 1,
};

let blue = {
  name: "player2",
  startingCell: 0,
  destinationCell: 0,
  playerNum: 2,
};

let playerCh = player1;


const dice1 = document.getElementById("dice");
console.log(dice1);
dice1.addEventListener("click", (e) => {
  e.preventDefault();
  switchPlayer();
});

function switchPlayer() {
  if (playerCh === "player1") {
    playerCh = "player2";
    player2Score.classList.add("active");
    player1Score.classList.remove("active");
    throwdice(blue, playerCh);
  } else {
    playerCh = "player1";
    player1Score.classList.add("active");
    player2Score.classList.remove("active");
    throwdice(red, playerCh);
  }

  return playerCh;
}

function move(nextCellNum, playerCh) {
  const nextCell = document.querySelector("#cell" + nextCellNum);
  const playerChar = document.querySelector("#" + playerCh);
  const playerScore = document.querySelector("#score-" + playerCh);

  nextCell.appendChild(playerChar);
  playerScore.innerText = nextCellNum;
}



function throwdice(player, playerCh) {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  DicePicture(diceNum);
  player.destinationCell = player.startingCell + diceNum;

  // player.destinationCell = newDestination
  

 
  player.score = player.destinationCell;

  const positionsToMove = [];
  for (let k = player.startingCell + 1; k <= player.destinationCell; k++) {
    positionsToMove.push(k);
  }
  let delay = 0;
  positionsToMove.forEach((position) => {
    setTimeout(() => {
      move(position, playerCh);
    }, delay);
    delay += 300;
  });

  player.startingCell = player.destinationCell;
  if (player.destinationCell === 2) {
    ladderSnake(playerCh, cell2);
    player.startingCell = 38;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 27) {
    ladderSnake(playerCh, cell27);
    player.startingCell = 10;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 29) {
    ladderSnake(playerCh, cell29);
    player.startingCell = 54;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 60) {
    ladderSnake(playerCh, cell60);
    player.startingCell = 24;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 58) {
    ladderSnake(playerCh, cell58);
    player.startingCell = 98;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 68) {
    ladderSnake(playerCh, cell68);
    player.startingCell = 92;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 77) {
    ladderSnake(playerCh, cell77);
    player.startingCell = 54;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell === 94) {
    ladderSnake(playerCh, cell2);
    player.startingCell = 72;
    player.destinationCell = newDestination;
  }
  if (player.destinationCell > 100) {
    return;
  }
  if (player.destinationCell === 100) {
    
    snakesBoard.style.display = "none";
    scoreBoard.style.display = "none";
    header.innerText="WHOO HOO" + player.name +'WON!'
    

      }
}
