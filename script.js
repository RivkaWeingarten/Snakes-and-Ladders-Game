//refactored DRY
const snakesBoard = document.querySelector(".snakesBoard");
const messageBoard = document.querySelector("#message-pic");
const resetButton = document.createElement("button");
const scoreBoard = document.querySelector(".header5");
const header = document.querySelector("h1");
const player1Score = document.getElementById("score1");
const player2Score = document.getElementById("score2");
const ladderSound = document.getElementById("ohYeah");
const snakeSound = document.getElementById("ohNo");
const errorSound = document.getElementById("error");
const winnerSound = document.getElementById("tada");

resetButton.innerText = "Play Again";
document.body.appendChild(resetButton);
resetButton.style.backgroundColor = "blue";
resetButton.style.color = "white";

//creates 10 rows. every odd row is set to flex-direction:row-reverse in the css file, to achieve the numbers going in oppsite direction
rownum = 11;
function addRows() {
  for (let j = 11; j > 1; j--) {
    rownum--;
    const rowcontainer = document.createElement("div");
    rowcontainer.setAttribute("id", "row" + rownum);
    rowcontainer.setAttribute("class", "container");

    snakesBoard.appendChild(rowcontainer);
  }
}
//name boxnumbers from 101 down to get the first div at starter point, every second cell has a different color
function addCells() {
  boxNum = 101;

  container1 = document.querySelectorAll(".container");
  container1.forEach((element) => {
    for (let i = 1; i < 11; i++) {
      const div1 = document.createElement("div");
      boxNum--;
      if (boxNum % 2) {
        div1.style.backgroundColor = "#65b6e0";
        // div1.style.color='white';
      }
      div1.setAttribute("id", "cell" + boxNum);
      div1.innerText = boxNum;

      element.appendChild(div1);
    }
  });
}
//this function adds a snake or a ladder using array snakeData
function addSnakeLadder(
  idName,
  imgUrl,
  alt,
  width,
  height,
  left,
  top,
  rotation
) {
  const image1 = document.createElement("img");
  image1.setAttribute("id", idName);
  image1.src = imgUrl;
  image1.alt = alt;
  image1.style.position = "absolute";
  image1.style.height = height;
  image1.style.width = width;
  image1.style.left = left;
  image1.style.top = top;
  image1.style.transform = `rotate(${rotation}deg)`;
  snakesBoard.appendChild(image1);
  return image1;
}
//this function adds two players
function createPlayer(color, player) {
  const homeCell = document.querySelector("#cell1");
  const playerDot = document.createElement("div");
  playerDot.setAttribute("id", player);
  playerDot.style.height = "20px";
  playerDot.style.width = "20px";
  playerDot.style.borderRadius = "50%";
  playerDot.style.backgroundColor = color;
  playerDot.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.7)";
  playerDot.style.border = "2px solid white";
  playerDot.style.justifyContent = "center";
  playerDot.style.zIndex = 1;
  homeCell.appendChild(playerDot);

  return playerDot;
}

const snakeData = [
  {
    idName: "snake1",
    imgUrl: "./assets/SNAKE4.png",
    alt: "first snake",
    width: "175px",
    height: "155px",
    left: "311px",
    top: "361px",
    rotation: 0,
    pathArray: [27, 14, 7, 8, 9, 10],
    messageImage: "./assets/message-slide1.png",
    startingCell: 10,
    destinationCell: 10,
  },
  {
    idName: "snake2",
    imgUrl: "./assets/SNAKE4.png",
    alt: "second snake",
    width: "175px",
    height: "221px",
    left: "11px",
    top: "198px",
    rotation: 0,
    pathArray: [60, 41, 40, 21, 22, 23, 24],
    messageImage: "./assets/message-slide2.png",
    startingCell: 24,
    destinationCell: 24,
  },
  {
    idName: "snake3",
    imgUrl: "./assets/SNAKE4.png",
    alt: "third snake",
    width: "165px",
    height: "155px",
    left: "172px",
    top: "101px",
    rotation: 0,
    pathArray: [77, 64, 56, 55, 54],
    messageImage: "./assets/message-slide3.png",
    startingCell: 54,
    destinationCell: 54,
  },

  {
    idName: "snake4",
    imgUrl: "assets/SNAKE4.png",
    alt: "fourth snake",
    width: "125px",
    height: "125px",
    left: "319px",
    top: "12px",
    rotation: 0,
    pathArray: [94, 87, 74, 73, 72],
    messageImage: "./assets/message-slide4.png",
    startingCell: 72,
    destinationCell: 72,
  },

  {
    idName: "ladder1",
    imgUrl: "./assets/ladder transparent.png",
    alt: "first ladder",
    width: "200px",
    height: "350px",
    left: "4px",
    top: "221px",
    rotation: 20,
    pathArray: [2, 19, 23, 38],
    messageImage: "./assets/message-ladder1.png",
    startingCell: 38,
    destinationCell: 38,
  },

  {
    idName: "ladder2",
    imgUrl: "./assets/ladder transparent.png",
    alt: "second ladder",
    width: "145px",
    height: "370px",
    left: "300px",
    top: "114px",
    rotation: -35,
    pathArray: [29, 33, 47, 54],
    messageImage: "./assets/message-ladder2.png",
    startingCell: 54,
    destinationCell: 54,
  },
  {
    idName: "ladder3",
    imgUrl: "./assets/ladder transparent.png",
    alt: "third ladder",
    width: "150px",
    height: "321px",
    left: "60px",
    top: "-28px",
    rotation: 0,
    pathArray: [58, 63, 78, 83],
    messageImage: "./assets/message-ladder3.png",
    startingCell: 83,
    destinationCell: 83,
  },

  {
    idName: "ladder4",
    imgUrl: "./assets/ladder transparent.png",
    alt: "fourth ladder",
    width: "95px",
    height: "353px",
    left: "378px",
    top: "-92px",
    rotation: 22,
    pathArray: [68, 73, 89, 92],
    messageImage: "./assets/message-ladder4.png",
    startingCell: 92,
    destinationCell: 92,
  },
];

addRows();
addCells();
createPlayer("red", "player1");
createPlayer("blue", "player2");
snakeData.forEach((snake) =>
  addSnakeLadder(
    snake.idName,
    snake.imgUrl,
    snake.alt,
    snake.width,
    snake.height,
    snake.left,
    snake.top,
    snake.rotation
  )
);
