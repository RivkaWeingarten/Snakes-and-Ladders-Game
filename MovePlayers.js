console.log("hi from move");
let startingCell = 0;
let destinationCell;

function move(nextCellNum) {
  const nextCell = document.querySelector("#cell" + nextCellNum);

  const player = document.querySelector("#player1");
  // currentCell.removeChild(player)
  nextCell.appendChild(player);
}
//https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

let i = 3 - 5;
function moveAlong() {

  setTimeout(function () {
    move(i);
    if (i < 50) {
      moveAlong(i);
      i++;
    }
  }, 500);
 ;
}
//starting cell =0
//destinationcell=starting cell+dicenum
//async run the code
//await startingnumber=destingationnumber

// moveAlong()
//e.preventDefault()

const dice1 = document.getElementById('dice')
console.log(dice1)
dice1.addEventListener("click", (e) => {
  e.preventDefault();
  throwdice();
});

function throwdice() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  destinationCell = startingCell + diceNum;


moveAlong()

  console.log(diceNum);
  console.log(destinationCell + "des");
}

// moveAlong()
