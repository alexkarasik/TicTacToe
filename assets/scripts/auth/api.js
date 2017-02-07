'use strict';
const config = require('../config');
const store = require('../store');

// The API file here was conceptually the hardest part of this project for me to wrap my head around and I still struggle with really comprehdning the bigger picture of how it connects by back and front end to the board that exists in the API. It requires the config and store files to retrieve the data we are giving to the API.
// When a user signs up, they are making an ajax request, which generally requires a method and a url and the data itself.

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

//changePassword requires authentication, which was a concept i struggled with quite a bit. Our url will get us to the user id, which can be retrived from store after a user has successfully signed in, then uses the patch method to edit the token.
const changePassword = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
  // we are actually making an edit, so we want to use the patch method here
    method: 'PATCH',
//headers allows us to perform actions on the http request. Just like the url needed the id to know which user we are changing the password for, we will need that users special and unique token for the authorization to change their password.
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

//This was the API function I struggled with the most. We are getting into the token of the id of the user and changing the current player, index and status on each turn. I don't want to overthink this too much, but we had to think of what paramters are being updated. The currentPlayer, status of the game and where the move is going are the things that get changed. The index and currentplayer are pieces of information contained with the individual cells that make up the game, which is information stored in the data.
const updateGame = function(index, currentPlayer, over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
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
        over: over,
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
