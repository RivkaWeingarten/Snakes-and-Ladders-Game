const dice =document.getElementById('dice')

dicePic=document.createElement('img')

function DicePicture(diceNum){
 dicePic.src='assets/dice'+ diceNum + '.png'
 dicePic.alt='picture of dice'+ diceNum
 dicePic.style.height='75px';
 dicePic.style.width='75px';
 dice.innerHTML="";
 dice.appendChild(dicePic)
}
