'use strict';

const success = () => {
  //console.log(data);
    $('.message').text('SUCCESS!');
};

const failure = () => {
  // console.error(error);
  $('.message').text('ERROR!');
};

const signUpSuccess = () => {
  $('#sign-up').hide();
  // if (data) {
  //   console.log(data);
  // }
  $('#sign-up')[0].reset();
  $('.message').text('Success!');
};

const signInSuccess = () => {
   $('#sign-up').val('');
   $('#sign-up').hide();
   $('#sign-in').hide();
   $('#change-password').show();
   $('.after-signin').show();
   $('.message').text('Success!');

  //  if (data) {
  //    console.log(data);
  //  }
   $('#sign-in')[0].reset();
};
const signOutSuccess = () => {
  $('.after-signin').hide();
  $('#change-password').hide();
  $('.board').hide();
  //$('.message').hide();
  // $('.games-played').hide().val('');
  $('#sign-in').show();
  $('#sign-up').show();
  // if (data) {
  //   console.log(data);
  // }
  $('.message').text('Success!');
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
