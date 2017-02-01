'use strict';
const config = require('../config');
const store = require('../store');

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data,
  });
};
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data,
  });
};
const changePassword = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};
const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigin}/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};
const showGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
    Authorization: `Token token=${store.user.token}`
  },
  });
};

const createGames = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
    Authorization: `Token token=${store.user.token}`
  },
  data
  });
};
const updateGame = function(index, currentPlayer, status) {
  return $.ajax({
    url: config.apiOrigin + '/games' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer,
        },
        over: status,
      }
    },
  });
};
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGames,
  showGames,
  updateGame,
};



// const updateGame = function(id){
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + id,
//     method: 'PATCH',
//     headers: {
//       data: {
//         game: {
//           index: {
//             cell: {
//               index: '',
//               value: 'X',
//             },
//             over: gameOver,
//           }
//         }
//       }
//     }
//   }
// );};

//const updateGamesuccess
// module.exports = {
//   signUp,
//   signIn,
//   changePassword,
//   signOut,
//   createGame,
//   showHistory,
//   index,
//   updateTTC,
// };
