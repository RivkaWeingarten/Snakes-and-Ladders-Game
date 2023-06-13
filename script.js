//refactored DRY
const snakesBoard = document.querySelector('.snakesBoard')
rownum = 11
function addRows() {
    for (let j = 11; j > 1; j--) {
        rownum--
        const rowcontainer = document.createElement('div')
        rowcontainer.setAttribute('id', 'row' + rownum)
        rowcontainer.setAttribute('class', 'container')

        snakesBoard.appendChild(rowcontainer)
    }
}
//name boxnumbers from 101 down to get the first div at starter point
function addCells() {
    boxNum = 101

    container1 = document.querySelectorAll('.container')
    container1.forEach(element => {

        for (let i = 1; i < 11; i++) {
            const div1 = document.createElement('div')
            boxNum--
            if (boxNum % 2) {
                div1.style.backgroundColor = 'lightpink';
            }
            div1.setAttribute('id','cell'+ boxNum)
            div1.innerText = boxNum
            

            element.appendChild(div1)
        }
    });
}

function addSnakeLadder(idName, imgUrl, alt, width, height, left, top, rotation) {
    const image1 = document.createElement('img')
    image1.setAttribute('id', idName)
    image1.src = imgUrl;
    image1.alt = alt;
    image1.style.position = 'absolute';
    image1.style.height = height;
    image1.style.width = width;
    image1.style.left = left;
    image1.style.top = top;
    image1.style.transform = `rotate(${rotation}deg)`;
    snakesBoard.appendChild(image1);
    return image1;
}
function createPlayer(color,player){
    const homeCell=document.querySelector('#cell1')
    const playerDot=document.createElement('div')
    playerDot.setAttribute('id', player);
    playerDot.style.height='20px';
    playerDot.style.width='20px';
    playerDot.style.borderRadius='50%';
    playerDot.style.backgroundColor=color;
    playerDot.style.boxShadow='5px 5px 10px rgba(0,0,0,0.7)';
    playerDot.style.border='2px solid white';
    playerDot.style.justifyContent='center'
    playerDot.style.zIndex=1;
    homeCell.appendChild(playerDot)

return playerDot

}

const snakeData = [
    {
        idName: "snake1",
        imgUrl: "",

    },
    {
        idName: "snake2"
    }
]
addRows()
addCells()
createPlayer('red','player1')
createPlayer('blue','player2')
addSnakeLadder('snake1', "assets/snake1.png", 'first snake', '165px', '155px', '172px', '101px', 0)
addSnakeLadder('snake2', "assets/snake1.png", 'second snake', '175px', '300px', '11px', '198px', 0)
addSnakeLadder('snake3', "assets/snake4.png", 'third snake', '175px', '155px', '311px', '361px', 0)
addSnakeLadder('snake4', "assets/snake4.png", 'fourth snake', '125px', '125px', '319px', '12px', 0)
addSnakeLadder('ladder1', "assets/ladder1.png", 'first ladder', '45px', '175px', '80px', '335px', 15)
addSnakeLadder('ladder2', "assets/ladder2.png", 'second ladder', '50px', '225px', '106px', '25px', 0)
addSnakeLadder('ladder3', "assets/ladder1.png", 'third ladder', '45px', '200px', '372px', '224px', 150)
addSnakeLadder('ladder4', "assets/ladder4.png", 'fourth ladder', '50px', '200px', '389px', '5px', 10)