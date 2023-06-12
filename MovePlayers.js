console.log("hi from move");
let startingCell = 0;
let score;
let player = 1;

function move(nextCellNum) {
  const nextCell = document.querySelector("#cell" + nextCellNum);

  const player = document.querySelector("#player1");

  nextCell.appendChild(player);
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
const dice1 = document.getElementById("dice");
console.log(dice1);
dice1.addEventListener("click", (e) => {
  e.preventDefault();
  throwdice();
  startingCell = destinationCell;
});

function throwdice() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  destinationCell = startingCell + diceNum;
  score = destinationCell;

  const positionsToMove = [];
  for (let k = startingCell + 1; k <= destinationCell; k++) {
    positionsToMove.push(k);
  }
  let delay = 0;
  positionsToMove.forEach((position) => {
    setTimeout(() => {
      move(position);
    }, delay);
    delay += 300;
  });

  console.log(diceNum);
  console.log(destinationCell + "des");
  console.log(startingCell + "start");
  console.log("score " + score);
  console.log(score - startingCell + "numbers to move");
  return destinationCell;
}
