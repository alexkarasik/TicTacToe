'use strict';
let currentPlayer = 'X';
let player1 = 'X';
let player2 = 'O';
let activeGame = true;
const board = ['', '', '', '', '', '', '', '', ''];

const resetGameBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    activeGame = true;
    $('#' + i).text(''); // + combines the two strings
    $('.message').text('');
  }
};

let possibleWins = function () {
  if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
      (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
      (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
      (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
      (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
      (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
      (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
      (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
    $('.message').text('X wins!');
    activeGame = false;
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
      (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
      (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
      (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
      (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
      (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
      (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
      (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
    $('.message').text('O wins!');
    activeGame = false;
  } else { // will tell draw, doesnt tell when draw has already happened
    let areThereOpenSquaresLeft = false;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        areThereOpenSquaresLeft = true;
      }
    }
    if (areThereOpenSquaresLeft === false) {
        $('.message').text('DRAW!!!');
    }
  }
};
const switchTurn = function (index) {
  if (board[index] === '' && activeGame === true) {
    board[index] = currentPlayer;
    possibleWins();
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
  return board[index];
};
module.exports = {
    switchTurn,
   possibleWins,
  resetGameBoard
};
// 'use strict';
// const board = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
//
//
// const resetGameBoard = function() {
//   for (let i = 0; i < board.length; i++) {
//     board[i] = '';
//     $('.box').text('');
//     //$('.win').text('');
//     currentPlayer = 'X';
//   }
// };
//
// let endGame = function() {
//   $('.box').off('click');
// };
//
// const checkWins = function() {
//   if (
//     board[0] === "X" && board[1] === "X" && board[2] === "X" ||
//     board[3] === "X" && board[4] === "X" && board[5] === "X" ||
//     board[6] === "X" && board[7] === "X" && board[8] === "X" ||
//     board[0] === "X" && board[4] === "X" && board[8] === "X" ||
//     board[2] === "X" && board[4] === "X" && board[6] === "X" ||
//     board[0] === "X" && board[3] === "X" && board[6] === "X" ||
//     board[1] === "X" && board[4] === "X" && board[7] === "X" ||
//     board[2] === "X" && board[5] === "X" && board[8] === "X"
//   ) {
//     $('.winMessage').text("X WON");
//     console.log('X won');
//     endGame();
//   } else if (
//     board[0] === "O" && board[1] === "O" && board[2] === "O" ||
//     board[3] === "O" && board[4] === "O" && board[5] === "O" ||
//     board[6] === "O" && board[7] === "O" && board[8] === "O" ||
//     board[0] === "O" && board[4] === "O" && board[8] === "O" ||
//     board[2] === "O" && board[4] === "O" && board[6] === "O" ||
//     board[0] === "O" && board[3] === "O" && board[6] === "O" ||
//     board[1] === "O" && board[4] === "O" && board[7] === "O" ||
//     board[2] === "O" && board[5] === "O" && board[8] === "O"
//   ) {
//     $('.winMessage').text("O WON");
//     console.log('O won');
//     endGame();
//   } else if (board.includes('') === false) {
//     $('.winMessage').text("DRAW");
//     console.log('DRAW');
//     endGame();
//   }
// };
//
// let flipPlayer = function(index) {
//   if (board[index] === '') {
//     board[index] = currentPlayer;
//     checkWins();
//     if (currentPlayer === "X") {
//       currentPlayer = "O";
//       // checkWins();
//     } else {
//       currentPlayer = "X";
//       // checkWins();
//     }
//   }
// };
//
// let boxes = $('.box');
//
// boxes.on('click', function(event) {
//   if ($(event.target).text() === '') {
//     $(event.target).text(currentPlayer);
//     // $(this).addClass(player1);
//     // changeTurn();
//   }
//   let conversion = parseInt(event.target.id);
//   flipPlayer(conversion);
//   console.log(board);
// });
//
//
//
// $('.square').on('click', (event) => {
//   let currentSquare = event.currentTarget.id;
//   let moveSuccess = flipPlayer(currentSquare);
//    $(event.currentTarget).text(moveSuccess);
// });
//
// $('#play-again-button').on('click', () => {
//   resetGameBoard();
// });
//
// module.exports = {
//   checkWins,
//   board,
//   resetGameBoard,
//   flipPlayer,
//   endGame,
// };
