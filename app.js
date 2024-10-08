const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// console.log(statusDiv);
// console.log(resetDiv);
// console.log(cellDivs);

const xSymbol = "x";
const oSymbol = "o";

let gameIsLive = true;
let xIsNext = true;
let winner = null;

//functions

const handleWin = (letter) => {
  gameIsLive = false;
  winner = letter;
  if (winner === "x") {
    statusDiv.innerHTML = `${winner} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${winner} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];

  //check for winner
  if (topLeft && topLeft === topMiddle && topLeft == topRight) {
    handleWin(topLeft);
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    handleWin(bottomLeft);
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    handleWin(topMiddle);
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusDiv.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`
    }
  }
};

const handleReset = (e) => {
  console.log(e);
};

const handleCellClick = (e) => {
  const classList = e.target.classList;
  const location = classList[1];
  //console.log("location", location);

  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    checkGameStatus();
  } else {
    classList.add("o");
    checkGameStatus();
  }
};

resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
