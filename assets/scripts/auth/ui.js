'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signUpSuccess = (data) => {
  $('#sign-up').hide();
  if (data) {
    console.log(data);
  }
};

const signInSuccess = (data) => {
   $('#sign-up').val('');
   $('#sign-up').hide();
   $('#sign-in').hide();
   $('#change-password').show();
   $('.after-signin').show();

   if (data) {
     console.log(data);
   }
};
const signOutSuccess = () => {
  $('.after-signin').hide();
  $('#change-password').hide();
  $('.board').hide();
  $('.message').hide();
  // $('.games-played').hide().val('');
  $('#sign-in').show();
  $('#sign-up').show();
  // if (data) {
  //   console.log(data);
  // }
};
const createGameSuccess = () => {
  $('.message').show();
  $('#newGame').show();
};
const showGameSuccess = (data) => {
  $('.games-played').show();
  //when a games played button is clicked, we want it to display the data of the number of games played in a message
  $('.games-played').text('You\'ve played ' + data.games.length + ' times!');
  // if (data) {
  //   console.log(data);
  // }
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signInSuccess,
  createGameSuccess,
  signOutSuccess,
  showGameSuccess
};
