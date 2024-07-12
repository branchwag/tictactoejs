const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// console.log(statusDiv);
// console.log(resetDiv);
// console.log(cellDivs);

let gameIsLive = true;
let xIsNext = true;

const handleReset = (e) => {
  console.log(e);
};

resetDiv.addEventListener("click", handleReset);
