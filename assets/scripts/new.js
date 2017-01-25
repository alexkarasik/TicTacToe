'use strict';

const board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];

const player1 = "X";

const player2 = "O";



const checkWins = function(){
  if(
    board[0] === player1 && board[1] === player1 && board[2] === player1 ||
      board[3] === player1 && board[4] === player1 && board[5] === player1 ||
      board[6] === player1 && board[7] === player1 && board[8] === player1 ||
      board[0] === player1 && board[4] === player1 && board[8] === player1 ||
      board[2] === player1 && board[4] === player1 && board[6] === player1 ||
      board[0] === player1 && board[3] === player1 && board[6] === player1 ||
      board[1] === player1 && board[4] === player1 && board[7] === player1 ||
      board[2] === player1 && board[5] === player1 && board[8] === player1
    ) {
      console.log("Player 1 wins!");
    }
  else if(
    board[3] === player2 && board[4] === player2 && board[5] === player2 ||
    board[6] === player2 && board[7] === player2 && board[8] === player2 ||
    board[0] === player2 && board[4] === player2 && board[8] === player2 ||
    board[2] === player2 && board[4] === player2 && board[6] === player2 ||
    board[0] === player2 && board[3] === player2 && board[6] === player2 ||
    board[1] === player2 && board[4] === player2 && board[7] === player2 ||
    board[2] === player2 && board[5] === player2 && board[8] === player2
  ){
    console.log("Player 2 wins");
  } else {
    console.log("Cat's game");
  }
  };

const gameShow = $("#0").on('click', function(){
  alert("one");
})

const playerturn = function(){
if(turns === 0){

}
};

const gameShow = $()






// const switch = function(){
//   if(turns = 0){
//
//   }
// };
