'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// const signinSuccess= (data) =>
// $('#sign-in');

const signInSuccess = () => {
  // $('#sign-up').val('');
  $('.email-sign-in').val('');
  // $('#sign-up').hide();
  // $('#sign-in').hide();
  // $('#new-game').show();
  // $('#game-log').show();
  // $('#change-password').show();
  // $('#sign-out').show();
  // $('#board').show();
  // if (data) {
  //   console.log(data);
  // }
};
const signOutSuccess = () => {
  // $('#sign-out').hide();
  // $('#change-password').hide();
  // $('#new-game').hide();
  // $('#game-log').hide();
  // $('#board').hide();
  // $('.games-played').hide().val('');
  // $('#sign-in').show();
  // $('#sign-up').show();
  $('#newGame').addClass('hidden');
  // if (data) {
  //   console.log(data);
  // }
};
const createGameSuccess = () => {
  $('#newGame').removeClass('hidden');
  $('.games-played').hide();
  // if (data) {
  //   console.log(data);
  // }
};
const showGameSuccess = (data) => {
  $('.games-played').show();
  $('.games-played').text('You\'ve played ' + data.games.length + ' times!');
  // if (data) {
  //   console.log(data);
  // }
};

module.exports = {
  failure,
  success,
  signInSuccess,
  createGameSuccess,
  signOutSuccess,
  showGameSuccess
};
