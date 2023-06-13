console.log("hi from move");
let red = {
  name: "player1",
  score: 0,
  startingCell:0,
  destinationCell: 0,
  playerNum: 1
};

let blue = {
  name: "player2",
  score: 0,
  startingCell:0,
  destinationCell: 0,
  playerNum: 2
  };

// let startingCell = 0;
// let score;
let playerCh=player1
function getScore(player){
 playerNumber=2
  console.log (player.score)
}
getScore(red)

function switchPlayer(){
if (playerCh==='player1'){
  playerCh='player2'
  playerNumber=2
  throwdice(blue,playerCh);
  }else{
  playerCh='player1'
  playerNumber=1
  throwdice(red,playerCh);
  }
  console.log('player='+playerCh+playerNumber)

  return playerCh
}



function move(nextCellNum,playerCh) {
  const nextCell = document.querySelector("#cell" + nextCellNum);

  const playerChar = document.querySelector("#"+ playerCh);

  nextCell.appendChild(playerChar);
}

//https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

// let i = 35;
// function moveAlong() {

//   setTimeout(function () {
//     move(i);
//     if (i < 50) {
//       moveAlong(i);
//       i++;
//     }
//   }, 500);
//  ;

// }
const dice1 = document.getElementById('dice')
console.log(dice1)
dice1.addEventListener("click", (e) => {
  e.preventDefault();
  
  switchPlayer()



 
});

function throwdice(player,playerCh) {

  let diceNum = Math.floor(Math.random() * 6) + 1;
    
      player.destinationCell = player.startingCell + diceNum;
      player.score=player.destinationCell

const positionsToMove=[];
  for (let  k = player.startingCell +1 ; k<=player.destinationCell; k++){
    positionsToMove.push(k)
    }
      let delay=0
      positionsToMove.forEach((position)=>{
        setTimeout(()=>{
          move(position,playerCh);

        },delay)
        delay+=300;
      })


  console.log(diceNum);
  console.log(player.score + "des "+player.name);
  console.log(player.startingCell +'start '+ player.name)
  console.log(player.name+'score ' + player.score)
  // console.log(score-startingCell +'numbers to move')
  // return player.destinationCell 
  player.startingCell=player.destinationCell
}

