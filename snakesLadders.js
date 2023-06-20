


function ladderSnake(cellNumber,messageUrl,diceNum){

let newDestination=cellNumber[cellNumber.length-1]
let starting=cellNumber[0]
//set time to wait for the move to finish before showing picture 
let timeToWait=(cellNumber.length+diceNum+1)*200

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
},timeToWait)
     
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
    