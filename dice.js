const dice =document.getElementById('dice')

dicePic=document.createElement('img')

function DicePicture(diceNum){
 dicePic.src='assets/dice'+ diceNum + '.png'
 dicePic.alt='picture of dice'+ diceNum
 dicePic.style.height='125px';
 dicePic.style.width='125px';
 dice.innerHTML="";
 dice.appendChild(dicePic)
}
