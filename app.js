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

const handleCellClick = (e) => {
  const classList = e.target.classList;
  const location = classList[1];
  //console.log("location", location);

  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    //console.log(e.target);
    classList.add("x");
    xIsNext = !xIsNext;
  } else {
    classList.add("o");
    xIsNext = !xIsNext;
  }
};

resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
