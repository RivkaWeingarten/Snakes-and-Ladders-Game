
const scoreBoard = document.querySelector(".header5");
const header = document.querySelector("h1");
const player1Score = document.getElementById("score1");
const player2Score = document.getElementById("score2");

// const snakeSound =document.getElementById('ohNo').play()
const ladderSound=document.getElementById('ohYeah')
const snakeSound=document.getElementById('ohNo')





//what does this code do? user clicks button to begin
//then program decides which player's turn it is in function called switchPlayer
//it then calls function throwdice and passes in char (red or blue) into function
//throw dice first randomizes number from 1 to 6, it calls function called DicePicture in dice.js
//which decides which picture to display based on random number
//it then defines destination cell which is starting cell plus the dice number
//it moves the charachter one div at a time to the destination cell in function move
//it also checks the destination number if it is a snake or a ladder then calls snakes snakesLadder.js which specifies the path of the snake or the ladder.
//until one character wins. character wins only when it  hits 100 exactly . (e.g if charachter is on box 99 and dice=6 it will remain on box 99 until it gets a dice =1)


let red = {
  name: "player1",
  startingCell: 0,
  destinationCell: 0,

};

let blue = {
  name: "player2",
  startingCell: 0,
  destinationCell: 0,

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
  console.log(playerCh)
  return playerCh;
}

function move(nextCellNum, playerCh) {
  const nextCell = document.querySelector("#cell" + nextCellNum);
  const playerChar = document.querySelector("#" + playerCh);
  const playerScore = document.querySelector("#score-" + playerCh);
  console.log(playerCh + 'player ' + nextCellNum + 'cell')
  nextCell.appendChild(playerChar);
  playerScore.innerText = nextCellNum;
  
}



function throwdice(player, playerCh) {
  let diceNum = Math.floor(Math.random() * 6) + 1;
 
  DicePicture(diceNum);

  player.destinationCell = player.startingCell + diceNum;

  // player.destinationCell = newDestination
 
   if (player.destinationCell > 100) {
    return;
  }

 else if (player.destinationCell === 100) {
    snakesBoard.style.display = "none";
    scoreBoard.style.display = "none";
    header.innerText="WHOO HOO " + player.name +' WON!';
    const winningSound =document.getElementById('tada').play ()
    // document.body.style.backgroundColor='dark grey';
    // document.style.color='white';
  
reset()
  
      }

      else  if (player.destinationCell === 94) {
       
        ladderSnake(playerCh, cell94);
        player.startingCell = 72;
        player.destinationCell = 72;
      }

      else if (player.destinationCell === 77) {
        
        ladderSnake(playerCh, cell77);
        player.startingCell = 54;
        player.destinationCell = 54;
      }

      else if (player.destinationCell === 68) {
        
        ladderSnake(playerCh, cell68);
        player.startingCell = 92;
        player.destinationCell = 92;
      }

      else if (player.destinationCell === 60) {
        
        ladderSnake(playerCh, cell60);
        player.startingCell = 24;
        player.destinationCell = 24;
      }

      else if (player.destinationCell === 58) {
        
        ladderSnake(playerCh, cell58);
        player.startingCell = 83;
        player.destinationCell = 83;
      }

      else if (player.destinationCell === 29) {
        
        ladderSnake(playerCh, cell29);
        player.startingCell = 54;
        player.destinationCell = 54;
      }
      else if (player.destinationCell === 27) {
     
        ladderSnake(playerCh, cell27);
        player.startingCell = 10;
        player.destinationCell = 10;
      }

      if (player.destinationCell === 2) {
        const ladderSound =document.getElementById('ohYeah').play ()
        ladderSnake(playerCh, cell2);
        player.startingCell = 38;
        player.destinationCell = 38;
      }

else{
    
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

}
diceNum=0
player.startingCell = player.destinationCell;
}


function reset(){
  red.startingCell=0
  blue.startingCell=0
  red.destinationCell=0
  blue.destinationCell=0
  diceNum=0
  playerCh='player1'
}
