const player_1 = "X";
const player_2 = "O";
const board_container = document.querySelector(".grid");
const winner_statement = document.getElementById("winner");

let current_player = player_1;
let board =["","","","","","","","",""];
let is_board_full = false;

//check if the board is full
function check_board_full() {
  let flag = true;
  board.forEach(e => {if (e=="") {flag = false}});
  is_board_full = flag;
};

// check if a line has 3 equal symbols
function check_line (a,b,c) {
  return (
    board[a] == board[b] &&
    board[b] == board[c] &&
    (board[a] == player_1 || board[a] == player_2)
  );
};

// check if the board contains a winning configuration
function result() {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      return board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      return board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    return board[0];
  }
  if (check_line(2, 4, 6)) {
    return board[2];
  }
  return "";
};

// finds the winner of a game
function check_winner () {
  res = result();
  if (res == player_1) {
    winner.innerText = " X WON!";
    is_board_full = true;
  } else if (res == player_2) {
    winner.innerText = "O WON!";
    is_board_full = true;
  } else if (is_board_full) {
    winner.innerText = "DRAW!";
  } 
};

// draws the board
function render_board() {
  board_container.innerHTML = "";
  board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i},current_player)">${board[i]}</div>`;
    if (e == player_1 || e == player_2) {    document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

function game_loop () {
  render_board();
  check_board_full();
  check_winner();
};

function addPlayerMove(e, p) {
  if (! is_board_full) {
  if (board[e] == "") {
    board[e] = p;
    if (current_player == player_1){
      current_player = player_2;
    } else {
      current_player = player_1;
    }
    game_loop();
  }}
};

function reset_board() {
  board = ["", "", "", "", "", "", "", "", ""];
  render_board();
  is_board_full = false;
  winner.innerText = "";
};










// initialise board

render_board()