'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
const store = require('../store');
const engine = require('../game/new.js');
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
 .done(ui.success)
 .fail(ui.fail);
};
const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done((response) => {
    store.user = response.user;
    return store.user;
  })
 .done(ui.signInSuccess)
 .fail(ui.fail);
};
const onSignOut = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
 .done(ui.signOutSuccess)
 .fail(ui.fail);
};
const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
 .done(ui.changePasswordSuccess)
 .fail(ui.fail);
};
const onShowGames = function (event) {
  event.preventDefault();
  api.showGames()
 .done(function (response) {
    $('.message').text('Number of Played Games is ' + response.games.length);
 })
 .fail(ui.fail);
};
const onCreateGames = function (event) {
  event.preventDefault();
  api.createGames()
    .done((response) => {
      store.game = response.game;
      return store.game;
    })
 .done(ui.success)
 .fail(ui.fail);
};
$('.square').on('click', (event) => {
  let currentSquare = event.currentTarget.id;
  let moveSuccess = engine.switchTurn(currentSquare);
   $(event.currentTarget).text(moveSuccess);
});
$('#play-again-button').on('click', () => {
  engine.resetGameBoard();
});
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#previous-games').on('click', onShowGames);
  $('#play-again-button').on('click', onCreateGames);
};
module.exports = {
  addHandlers,
  onCreateGames,
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
