'use strict';
let currentPlayer = 'X';
let player1 = 'X';
let player2 = 'O';
let activeGame = true;
const board = ['', '', '', '', '', '', '', '', ''];
const resetGameBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
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
$('.square').on('click', (event) => {
  let currentSquare = event.currentTarget.id;
  let moveSuccess = switchTurn(currentSquare);
   $(event.currentTarget).text(moveSuccess);
});
$('#play-again-button').on('click', () => {
  resetGameBoard();
});
module.exports = {
  'switchTurn': switchTurn,
  'possibleWins': possibleWins,
  'resetGameBoard': resetGameBoard
};


// 'use strict';
//
// const getFormFields = require(`../../../lib/get-form-fields`);
//
// const api = require('./api');
// const ui = require('./ui');
//
// const store = require('../store');
//
// //const engine = require('../new.js');
//
// //const connect = require ('../new.js');
//
//
//
// const onSignUp = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signUp(data)
//     .then(ui.success)
//     .catch(ui.failure);
//
// };
//
// const onSignIn = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signIn(data)
//   .then((response) => {
//     store.user = response.user;
//     return store.user;
//   })
//     .then(ui.success)
//     .catch(ui.failure);
//
// };
// const onChangePassword = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.changePassword(data)
//     .then(ui.success)
//     .catch(ui.failure)
//     ;
// };
//
// const onSignOut = function (event) {
//   event.preventDefault();
//
//   api.signOut()
//     .then(() => {
//       delete store.user;
//       return store;
//     })
//     .then(ui.success)
//     .catch(ui.failure)
//     ;
// };
//
// // const updateGame = function(data, id){
// //   return $.ajax ({
// //     url
// //   })
// // }
//
// const onGetGame = function (event) {
//   event.preventDefault();
//
//   api.game()
//
//     .then(ui.getGameSuccess)
//     .catch(ui.failure)
//     ;
// };
//
//
//
//
//
//   // $('#sign-up').on//add show and hide//('submit', onSignUp);
//   const addHandlers = () => {
//     $('#sign-up').show();
//     $('#sign-in').show();
//     //$('#dude').hide();
//     //$('#getGame').hide();
//     //$('#game-log').hide();
//     $('#sign-out').hide();
//     //$('#reset').hide();
//     // $('#hidePass').hide();
//     $('#sign-up').on('submit', onSignUp);
//     $('#sign-in').on('submit', onSignIn);
//     $('#change-password').on('submit', onChangePassword);
//     $('#sign-out').on('submit', onSignOut);
//     $('#getGame').on('click', onGetGame);
//     //$('#reset').on('click', game.onCreateGame);
//   // $('#sign-in').on('submit', onSignIn);
//   // $('#sign-up').on('submit', onSignUp);
//   // $('#change-password').on('submit', onChangePassword);
//   // $('#sign-out').on('click', onSignOut);
//   // $('#previous-games').on('click', onShowGames);
//   // $('#play-again').on('click', onCreateGame);
//
//
//   //$('#play-again').on('click', resetGameBoard);
//   //$('#previous-games').on('click', onShowGames);
//
//   //$("#play-again").on('click', onCreateGame);
// };
//
//
// module.exports = {
//   addHandlers,
//   // onSignUp,
//   // onSignIn,
//   // onChangePassword,
//   // onSignOut,
//   // onShowGames,
//   // onCreateGame,
//   // onGetGame
// };
