const container=document.querySelectorAll('.container')
//name boxnumbers from 101 down to get the first div at starter point
boxNum=101

container.forEach(element => {
   
    for (let i=1; i< 11; i++){
        const div1 = document.createElement('div')
        boxNum--
        if (boxNum % 2){
        div1.style.backgroundColor='lightpink';
        }
            div1.setAttribute('id', boxNum)
             div1.innerText=boxNum
             
            element.appendChild(div1)
            }
   });

