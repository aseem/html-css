let board = ["", "", "", "", "", "", "", "", ""];
const board_container = document.querySelector(".play-area");
const player_x = "X";
const player_o = "O";
let current_player = player_x;
const winner = document.querySelector(".winner");

// Function to render the board
const renderBoard = () => {
  board_container.innerHTML = "";
  board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${board[i]}</div>`;
    if (e == player_x || e == player_o) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

// Function to add move
const addPlayerMove = (i) => {
  if (board[i] == "") {
    board[i] = current_player;
    updateGameState();
    renderBoard();
  }
};

const updateGameState = () => {
  result = checkForWinner();
  if (result) {
    winning_player = board[result[0]];
    if (winning_player == player_x) {
      winner.innerText = "Winner is Player 1!";
      winner.classList.add("playerWin");
    } else {
      winner.innerText = "Winner is Player 2!";
      winner.classList.add("computerWin");
    }
    result.forEach((e, i) => {
      document.querySelector(`#block_${e}`).classList.add("winning");
      console.log(e);
    });
  }
  if (isBoardFull()) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
  current_player = current_player == player_x ? player_o : player_x;
};

const checkTiles = (a, b, c) => {
  return (
    board[a] == board[b] &&
    board[b] == board[c] &&
    (board[a] == player_x || board[b] == player_o)
  );
};

const checkForWinner = () => {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (checkTiles(i, i + 1, i + 2)) {
      return [i, i + 1, i + 2];
    }
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (checkTiles(i, i + 3, i + 6)) {
      return [i, i + 3, i + 6];
    }
  }

  // check diagonals
  if (checkTiles(0, 4, 8)) {
    return [0, 4, 8];
  }
  if (checkTiles(2, 4, 6)) {
    return [2, 4, 6];
  }

  return null;
};

const isBoardFull = () => {
  for (let i = 0; i < 9; i++) {
    if (board[i] == "") {
      return false;
    }
  }
  return true;
};

const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  current_player = player_x;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  renderBoard();
};

renderBoard();
