// Initilization of variables
let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let currTurn = document.getElementById("currentTurn");
let winner = document.getElementById("winner");

function placeMark(id) {
  if (board[id] === "") {
    document.getElementById(id).innerHTML = player;
    board[id] = player;

    // toget alternate "X" and "O" and assigned to player variable
    player = player === "X" ? "O" : "X";

    checkForWin();
    checkForDraw();

    // displaying whose turn it is
    if (player === "X") {
      currTurn.innerText = "X turn";
    } else {
      currTurn.innerText = "O turn";
    }
  }
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    // destructuring array elements
    const [a, b, c] = winningCombos[i];
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      winner.innerText = `${board[a]} wins!`;

      // console.log(`${board[a]} wins!`);
      resetBoard();
    }
  }
}

function checkForDraw() {
  if (!board.includes("")) {
    winner.innerText = "Game is a draw!";
    // console.log("Game is a draw!");
    resetBoard();
  }
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  // winner.innerText=""
  // location. reload()
  // currTurn.innerText=""
}
// to get td tag and applying on click to disply "X" OR "O" alternatively w.r.t id
document.querySelectorAll("td").forEach((td) => {
  td.addEventListener("click", () => {
    // console.log(td.id);
    placeMark(td.id);
  });
});
