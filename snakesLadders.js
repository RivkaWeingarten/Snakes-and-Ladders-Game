


function ladderSnake(playerCh,cellNumber,messageUrl){

let newDestination=cellNumber[cellNumber.length-1]
let starting=cellNumber[0]






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
      if (newDestination >starting){
        snakeOrLadder='ladder'
         ladderSound.play()
      }
        
      else{
        snakeOrLadder='snake'
        snakeSound.play()
      }

setTimeout(()=>{
  addMessage(messageUrl)
},1000)
     
// return newDestination
}


//add message img
function addMessage(messageUrl){
  const messageImage=document.createElement('img')
  messageImage.src=messageUrl
  snakesBoard.classList.add('show')
  messageImage.classList.add('snake-ladder-image')

  snakesBoard.appendChild(messageImage)
}

function removeMessage(){
  const imageToRemove=document.querySelectorAll('.snake-ladder-image')

    imageToRemove.forEach(image=> {
    image.style.display='none'
   
    })
  }
    