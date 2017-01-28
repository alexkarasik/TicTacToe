'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

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
    return store.user;
  })
    .then(ui.success)
    .catch(ui.failure);

};
const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.failure)
    ;
};

// const updateGame = function(data, id){
//   return $.ajax ({
//     url
//   })
// }


const onCreateGame = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createGame(data)
  .then(ui.success)
  .catch(ui.failure);
};

// const onCreateGame = function (event) {
//    return $.ajax({
//      url: config.apiOrigin + '/games'
//      method: 'POST'
//      headers:{
//        Authorization: 'Token
//        token=${store.user.token}'
//      },
//    });
// };

// const gameUpdate =function(index, currentPlayer){
//   return $.ajax ({
//     url: config.apiOrigin + '/game' + store.game.id,
//     method: 'PATCH',
//     headers:{
//       Authorization: 'Token'
//       token={$store.user.token},
//     },
//     data:{
//         cell:{
//           index: index,
//
//         }
// }
//   })
// }

// const on createGame and copy and paste
//const showGamw

const addHandlers = () => {

  // $('#sign-up').on//add show and hide//('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-up').on('submit', onSignUp);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  //$("#reset").on('click', createGame);
};


module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame
};
