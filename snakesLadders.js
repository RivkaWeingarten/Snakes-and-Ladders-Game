
const cell2 =[2,19,23,38]
const cell27=[27,14,7,8,9,10]
const cell29=[29,33,47,54]
const cell58=[58,63,78,83]
const cell60 =[60,41,40,21,22,23,24]
const cell68=[68,73,89,92]
const cell77=[77,64,56,55,54]
const cell94=[94,87,74,73,72]

function ladderSnake(playerCh,cellNumber){

const snakesToMove=[];
  for (let  k = 0; k<cellNumber.length; k++){
    snakesToMove.push(cellNumber[k])
    }
      let delay=0
      snakesToMove.forEach((cell)=>{
        setTimeout(()=>{
          move(cell,playerCh);
        },delay)
        delay+=200;
      })

let newDestination=cellNumber[cellNumber.length-1]
let starting=cellNumber[0]
if (newDestination >starting)
snakeOrLadder='ladder'
else{
  snakeOrLadder='snake'
}
console.log(snakeOrLadder)
// return newDestination
    }
