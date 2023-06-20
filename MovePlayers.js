//what does this code do? user clicks button to begin
//then program decides which player's turn it is in function called switchPlayer
//it then calls function throwdice and passes in char (red or blue) into function
//throw dice first randomizes number from 1 to 6, it calls function called DicePicture in dice.js
//which decides which DICE picture to display based on random number
//it then defines destination cell which is starting cell plus the dice number
//it moves the charachter one div at a time to the destination cell in function move
//it also checks the destination number if it is a snake or a ladder then calls snakes snakesLadder.js which specifies the path of the snake or the ladder.
//until one character wins. character wins only when it  hits 100 exactly . (e.g if charachter is on box 99 and dice=6 it will remain on box 99 until it gets a dice =1)

let red = {
  name: "RED",
  startingCell: 0,
  destinationCell: 0,
  color: "red",
};

let blue = {
  name: "BLUE",
  startingCell: 0,
  destinationCell: 0,
  color: "blue",
};

let playerCh = player1;
//user clicks the button
const dice1 = document.getElementById("dice");
console.log(dice1);
dice1.addEventListener("click", (e) => {
  e.preventDefault();
  removeMessage();
  switchPlayer();
});
//selects next player
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
//this moves a single cell
function move(nextCellNum, playerCh) {
  const nextCell = document.querySelector("#cell" + nextCellNum);
  const playerChar = document.querySelector("#" + playerCh);
  const playerScore = document.querySelector("#score-" + playerCh);

  nextCell.appendChild(playerChar);
  playerScore.innerText = nextCellNum;
}

function throwdice(player, playerCh) {
  let diceNum = Math.floor(Math.random() * 6) + 1; // rolls dice

  DicePicture(diceNum); //calls for dice picture

  player.destinationCell = player.startingCell + diceNum; //determines landing cell
 
  //creates an array of cells that need to be moved e.g. [1,2,3]
  const positionsToMove = [];
  for (let k = player.startingCell + 1; k <= player.destinationCell; k++) {
    positionsToMove.push(k);
      }
  // checks if landing cell is over 100, then plays error sound
  if (player.destinationCell > 100) {
  error.play()
    return;
  }

 
  // checks if SNAKE OR LADDER (DRY) checks snakeData on script.js
  let selectedPoint = snakeData.find(
    (point) => point.pathArray[0] === player.destinationCell
  );
  //if it is a snake or ladder, it determines pathArray starting cell and destination cell from snakeData
  if (selectedPoint) {
    let { pathArray, destinationCell, messageImage } = selectedPoint;
    ladderSnake(pathArray, messageImage,diceNum);
    player.startingCell = destinationCell;
    player.destinationCell = destinationCell;
    path=pathArray
  } else {
    path=[]
    player.score = player.destinationCell;
  }

  //if player wins
  if (player.destinationCell === 100) {
   
   
    // const winningSound = document.getElementById("tada").play();
    messageImage = "./assets/winner.png";
   
    setTimeout(()=>{
      addMessage(messageImage)
      winnerSound.play()
      scoreBoard.style.display = "none";
      header.innerText = player.name + " WON!";
      header.style.color = player.color;
      },diceNum*200)
    reset();
  }
  //it then combines the two arrays to form a combinedMove
    combinedMove=positionsToMove.concat(path)

//this moves each cell at at time.
    let delay = 0;
    combinedMove.forEach((position) => {
      setTimeout(() => {
        move(position, playerCh);
      }, delay);
      delay += 200;
    });

    player.startingCell = player.destinationCell;
  

  

  player.startingCell = player.destinationCell;
}

//resets 
function reset() {
  red.startingCell = 0;
  blue.startingCell = 0;
  red.destinationCell = 0;
  blue.destinationCell = 0;
  diceNum = 0;
  playerCh = "player1";
}

//play again is clicked
resetButton.addEventListener('click',(e)=>{
  e.preventDefault 
  reset()
  location.reload()
}
   )