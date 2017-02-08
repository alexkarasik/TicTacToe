'use strict';
//1. I am going to fill up my code with comments, so I can explain everything I have done back to myself and hone in on what I need to get a better understanding of. I am numbering my comments in the order of approaching this to best understand my own thoguht process and how I can improve in the future.
//I started off with my engine as suggested and making some of the global variables I knew I would be needing, while keeping in mind the user stories that would make up my main function. I knew I would be switching a variable current player back and forth between x and o, so I set a current player to x to start off with. I also have an 'over' variable, which will be set to a boolean and determining whether or not the game is still going on or not. I also have an array of empty strings, representing my board, which is where the x's and o's will be inserted into and represented in the ui by the div table.

//5. we are using the API in the switchTurn function to update the game to know whether or not it woud be appropriate for that function to continue running, so we include it here at the top as a requirement
const api = require('./auth/api');


let currentPlayer = 'X';
let player1 = 'X';
let player2 = 'O';
let over = false;
const board = ['', '', '', '', '', '', '', '', ''];

//7. This fucntion gave me the most trouble and sent me down a rabbit hole last Sunday. This function is setting up a new and empty board. We want a blank board, blank array, blank messages and a live game. This function loops through every iteration of the array and clears everything out. Now it seems fairly straight-forward.
const resetGameBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    over = false;
    $('#' + i).text('');
    $('.message').text('');
    currentPlayer = 'X';
  } $('.square').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer);
    } switchTurn(parseInt(event.target.id));
  });
};

//2. Me and the group I was working with realized that we needed to come up with all the winning combinations of the game. I know where are a few more code efficient ways of doing this, but I also think it is the simplest and that is my interpretation of best practice. There is a message div in my HTML I included after making the skeleton on this to display the winner. We want to return true after each possible combination of a successfully completed game has occurred.

let possibleWins = function () {
  if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
      (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
      (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
      (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
      (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
      (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
      (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
      (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
    $('.message').text('X wins!');
    over =  true;
    $('.square').off('click');
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
      (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
      (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
      (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
      (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
      (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
      (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
      (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
    $('.message').text('O wins!');
    over = true;
    $('.square').off('click');
  } else if (board.includes('') === false){

        $('.message').text('DRAW!!!');
        over = true;
        $('.square').off('click');
  }
};

//3. This was the second main function we spent a bit of time on in the engine and my commit history will show a number of changes to this function. I will explain what is happening in pseudo-code. Our function is taking in an index for the argument. If an index space on our board array is empty, then we are going to place our current player value, 'X' in it to begin with. the over global variable which is set to false, will be tested against the possible wins function, so it should noe return true. We include the updateGame function that was created in the api that takes in the index, current player and whehter of not the game is over and paramters and updates the status of the game to the server. The rest of the function is switching x and o from each other.

const switchTurn = function (index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    // The status of our game is equal to the result of our possibleWins function. We are checking for a winner after each move to see if we have a match of any of the winning possibilities
    over = possibleWins();
  //After each move, we also want to be updating the info taken in by out API, so we include the updateGame function we used there to update the information we have just taken in, concerning which index/id has been used, which currentPlayer used it and if the status of the game is over or not.
    api.updateGame(index, currentPlayer, over);
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  }

};

//4. This was an event handler that moved around a lot between the engine here and the events.js file. I am still a bit unfamiliar with the rocket syntax, so I wanted to make a point to use it. Whenever a user clicks on a square, the text of current player, which is x or o, will appear in that target of the event. The switch turn function is then applied to the id value of the divs in our table, which were given div values with string id's and converted to numbers with parseInt. I got a lot of help with this part. It is pretty obvious that we want an x or o to appear in the boxes, but using event.target was a concept i struggled with as well as applying parseInt to get the indexes as converted string values.
$('.square').on('click', (event) => {
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer);
  }
//Just to be extra clear, event.target.id refers to the element that triggered the event
    switchTurn(parseInt(event.target.id));
});

//6. we must write module.exports to make the functions created in this file available throughout the program. Forgetting this was the cause of a few errors along the way in this and other files.
module.exports = {
    switchTurn,
   possibleWins,
  resetGameBoard,

};
