'use strict';
//the events will be in use in all of the following files, including the form fields and store, where the data will be stored
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
const store = require('../store');
const engine = require('../new');

//We are creating the events that go into our click handlers.
//I needed help to understand what was going on here, but after the first succesffuly created event, the rest became more intuitive.
//The event is the argument being taken in by my event handlers. preventDefault stops any previous event from occuring, which is necessary for our event to work. We are getting our data from the information that the user enters into the sign up form field. We use the sign up function created in the API to pass that data onto the game. We have the conditions accounted for a success or failure, coming from out ui file. We are adding a few event handlers to these as well to make some of the requirements work, such as displaying the number of games won on the success of an onGameSuccess event.
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
 .then(ui.success)
 .catch(ui.failure);
};


const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    $(".after-signin").show();
    $(".after-signin2").hide();

    return store.user;
  })
 .then(ui.signInSuccess)
 .catch(ui.failure);
};


const onSignOut = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .then((response) => {
    $(".after-signin").hide();
    $(".after-signin2").show();
  })
 .then(ui.signOutSuccess)
 .catch(ui.failure);
};


const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(function (response) {
     $('.message').text("password changed")
  })
 .then(ui.success)
 .catch(ui.failure);
};


const onShowGames = function (event) {
  event.preventDefault();
  api.showGames()
 .then(function (response) {
    $('.message').text('Number of Played Games is ' + response.games.length);
 })
 .catch(ui.failure);
};


const onCreateGames = function (event) {
  event.preventDefault();
  api.createGames()
    .then((response) => {
      store.game = response.game;
      return store.game;
    })
 .then(ui.createGameSuccess)
 .catch(ui.failure);
 engine.resetGameBoard();
};

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
// const onSignUp = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signUp(data)
//     .then(ui.success)
//     .catch(ui.faiure);
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
//
// const onCreateGame = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.createGame(data)
//   .then(ui.success)
//   .catch(ui.failure);
// };
//
// // const onCreateGame = function (event) {
// //    return $.ajax({
// //      url: config.apiOrigin + '/games'
// //      method: 'POST'
// //      headers:{
// //        Authorization: 'Token
// //        token=${store.user.token}'
// //      },
// //    });
// // };
//
// // const gameUpdate =function(index, currentPlayer){
// //   return $.ajax ({
// //     url: config.apiOrigin + '/game' + store.game.id,
// //     method: 'PATCH',
// //     headers:{
// //       Authorization: 'Token'
// //       token={$store.user.token},
// //     },
// //     data:{
// //         cell:{
// //           index: index,
// //
// //         }
// // }
// //   })
// // }
//
// // const on createGame and copy and paste
// //const showGamw
//
// const addHandlers = () => {
//
//   // $('#sign-up').on//add show and hide//('submit', onSignUp);
//   $('#sign-in').on('submit', onSignIn);
//   $('#sign-up').on('submit', onSignUp);
//   $('#change-password').on('submit', onChangePassword);
//   $('#sign-out').on('submit', onSignOut);
//   //$("#reset").on('click', createGame);
// };
//
//
// module.exports = {
//   addHandlers,
//   onSignUp,
//   onSignIn,
//   onChangePassword,
//   onSignOut,
//   onCreateGame
// };
