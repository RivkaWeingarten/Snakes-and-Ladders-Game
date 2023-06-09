const container=document.querySelectorAll('.container')
//name boxnumbers from 101 down to get the first div at starter point
boxNum=101

container.forEach(element => {
   
    for (let i=1; i< 11; i++){
        const img = document.createElement('img')
        boxNum--
        if (boxNum % 2){
        img.style.backgroundColor='lightpink';
        }
            img.setAttribute('id', boxNum)
             img.value=boxNum
             
            element.appendChild(img)
            }
   });

function isOdd(num) { return num % 2;}

// console.log(`${unsplashURL}${getRandomSize()}`)
// function getRandomSize(){
    // return `${getRandomNR()}x${getRandomNR()}`
// }
// function getRandomNR(){
//     return Math.floor(Math.random()*10)+300

// }