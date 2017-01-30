'use strict';
const success = (data) => {
  if (data) {
    console.log(data);
  }
};
const failure = (error) => {
  console.log(error);
};
module.exports = {
  success,
  failure,
};
// const createGameSuccess = () => {
//   $('#dude').show();
//   $('.history').hide();
//
// };
//
// const getGameSuccess = (data) => {
//   $('.history').show();
//   $('.history').text('You\'ve played ' + data.games.length + ' times!');



// $('#reset').on('click', onCreateGames);
// };

// const signinSuccess= (data) =>
// $('#sign-in');
