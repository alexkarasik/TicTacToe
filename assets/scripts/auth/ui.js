'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// const signinSuccess= (data) =>
// $('#sign-in');

module.exports = {
  failure,
  success,
};
