'use strict';
const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
// let player1 = 'X';
// let player2 = 'O';
let newGame = $('#reset');

const resetGameBoard = function() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.box').text('');
    //$('.win').text('');
    currentPlayer = 'X';
  }
};

  let endGame = function() {
    $('.box').off('click');
  };

  let boxes = $('.box');
  boxes.on('click', function(event) {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer);
      // $(this).addClass(player1);
      // changeTurn();
    }
    let conversion = parseInt(event.target.id);
    turns(conversion);
    console.log(board);
  });


newGame.on('click', function() {
  resetGameBoard();
});

const checkWins = function() {
  if (
    board[0] === "X" && board[1] === "X" && board[2] === "X" ||
    board[3] === "X" && board[4] === "X" && board[5] === "X" ||
    board[6] === "X" && board[7] === "X" && board[8] === "X" ||
    board[0] === "X" && board[4] === "X" && board[8] === "X" ||
    board[2] === "X" && board[4] === "X" && board[6] === "X" ||
    board[0] === "X" && board[3] === "X" && board[6] === "X" ||
    board[1] === "X" && board[4] === "X" && board[7] === "X" ||
    board[2] === "X" && board[5] === "X" && board[8] === "X"
  ) {
    //$('.win').text("X won!");
    console.log('X won');
    endGame();
  } else if (
    board[0] === "O" && board[1] === "O" && board[2] === "O" ||
    board[3] === "O" && board[4] === "O" && board[5] === "O" ||
    board[6] === "O" && board[7] === "O" && board[8] === "O" ||
    board[0] === "O" && board[4] === "O" && board[8] === "O" ||
    board[2] === "O" && board[4] === "O" && board[6] === "O" ||
    board[0] === "O" && board[3] === "O" && board[6] === "O" ||
    board[1] === "O" && board[4] === "O" && board[7] === "O" ||
    board[2] === "O" && board[5] === "O" && board[8] === "O"
  ) {
    //$('.win').text("O won!");
    console.log('O won');
    endGame();
  } else if (board.includes('') === false) {
    $('.win').text("DRAW");
    console.log('DRAW');
    endGame();
  }
};
// let count = 0;
let turns = function(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    checkWins();
    if (currentPlayer === "X") {
      currentPlayer = "O";
      // checkWins();
    } else {
      currentPlayer = "X";
      // checkWins();
    }
  } else {
    console.log("pick another place");
    //$('.win').text("pick another place");
  }
};
// let changeTurn = function() {
//   if(currentPlayer === 'X'){
//     currentPlayer = 'O';
//   }else {
//     currentPlayer = 'X';
//   }
// };
// let $dude =$('#dude');


// $('#').on('click', function(){
//   if($('#').text()===''){
//     $('#').text(player1 || player2);
//   }
// });
// $('#side').on('click', function(){
//   const $cell = $('#' + this.id);
//     const indx = parseInt($cell.attr('id').slice(1));
//       $('#${indx}').html('X');
// })
// const gameShow =
//   $('#side1').on('click', function(){
//     alert('1');
//   });
module.exports = {
  checkWins,
  board,
  resetGameBoard,
  turns,
  endGame,
};
// 'use strict';
//
//
// const board = ["", "", "", "", "", "", "", "", ""];
//
// let currentPlayer = "X";
//
// let newGame = $('#reset');
// const resetGameBoard = function() {
//   for (let i = 0; i < board.length; i++) {
//     board[i] = '';
//     $('.box').text('');
//     $('.win').text('');
//     currentPlayer = 'X';
//   }
//   boxes.on('click', function(event) {
//     if ($(event.target).text() === '') {
//       $(event.target).text(currentPlayer);
//       // $(this).addClass(player1);
//       // changeTurn();
//     }
//     turns(event.target.id);
//     console.log(board);
//   });
// };
//
// newGame.on('click', function() {
//   resetGameBoard();
// });
//
//
// const resetGameBoard = function(){
//   for(let i = 0; i < board.length; i++){
//     board[i] = '';
//     // $('.box').text('');
//   }
// };
//
// // newGame.on('click', function(){
// //   resetGameBoard();
// // });
//
// const checkWins = function(){
//   if(
//       board[0] === 'X' && board[1] === 'X' && board[2] === 'X' ||
//       board[3] === 'X' && board[4] === 'X' && board[5] === 'X' ||
//       board[6] === 'X' && board[7] === 'X' && board[8] === 'X' ||
//       board[0] === 'X' && board[4] === 'X' && board[8] === 'X' ||
//       board[2] === 'X' && board[4] === 'X' && board[6] === 'X' ||
//       board[0] === 'X' && board[3] === 'X' && board[6] === 'X' ||
//       board[1] === 'X' && board[4] === 'X' && board[7] === 'X' ||
//       board[2] === 'X' && board[5] === 'X' && board[8] === 'X'
//     ) {
//       // $('win').text=("X wins!");
//       console.log('X won');
//       // endGame();
//     }
//   else if(
//     board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
//     board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
//     board[6] === 'O' && board[7] === 'O' && board[8] === 'O' ||
//     board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
//     board[2] === 'O' && board[4] === 'O' && board[6] === 'O' ||
//     board[0] === 'O' && board[3] === 'O' && board[6] === 'O' ||
//     board[1] === 'O' && board[4] === 'O' && board[7] === 'O' ||
//     board[2] === 'O' && board[5] === 'O' && board[8] === 'O'
//   ){    {
//       // $('win').text=("O wins!");
//       console.log('O won');
//       // endGame();
//     }
//   } else if(board.includes('')===false) {
//
//     // $('win').text=("Tie");
//     console.log("TIE!");
//     // endGame();
//
//   }
//   };
//
// //
// // const gameStatus = function(){
// //   return board.includes("");
// //
// // };
// //
// // const addMove = function(index){
// //   if(!board[index]){
// //     board[index] = currentPlayer;
// //     if(currentPlayer===player1){
// //       currentPlayer=player2;
// //     } else {
// //       currentPlayer=player1
// //     }
// //   }else{
// //     console.log("pick another place");
// //   }
// // }
//
// //
// // let player1 = 'X';
// // let player2 = 'O';
//
// const flipPlayer = function(index){
//   if(board[index] === ''){
//    board[index]= currentPlayer;
//    checkWins();
//    if(currentPlayer === "X"){
//      currentPlayer = "O";
//    } else {
//      currentPlayer = "X";
//    }
//  } else {
//    console.log("pick another place!");
//  }
//
//
//  let boxes = $('.box');
// boxes.on('click', function(event) {
//   if ($(event.target).text() === '') {
//     $(event.target).text(currentPlayer);
//     // $(this).addClass(player1);
//     // changeTurn();
//   }
//   turns(event.target.id);
//   console.log(board);
// });
//
//
// //     board[index]="x";
// //     currentPlayer="o";
// //     checkWins();
// //  } else if (currentPlayer === "o"){
// //    board[index] = currentPlayer;
// //    currentPlayer= "x";
// //    checkWins();
// //  } else {
// //     console.log("pick another place");
// // }
//
//
//
// // let endGame = function(){
// //   $('.box').off('click');
// // };
//
// // let boxes = $('.cell')
//
//
// // boxes.on('click', function(event){
// //   if($(event.target).text() === ''){
// //     $(event.target).text(currentPlayer);
// //   }
// //   let conversion = parseInt(event.target.id);
// //   turns(conversion);
// //   //we are
// //   console.log(board);
// // })
// //
//
//
//
//
//
// //let boxes = $('.box');
//
//
// //let boxes =
// // boxes.on('click', function(event){
// //   if($(this).text()=== ''){
// //     $(event.target).text(currentPlayer);
// //   }
// //     turns(event.target.id);
// // })
//
//
//
//
// // $('#').on('click', function(){
// //   if($('#').text() === ''){
// //     $('#').text(marker);
// //   }else{
// //     console.log('error');
// //   }
// //   }
// // );
//
//
//
//
// module.exports = {
//   board,
//   resetGameBoard,
//   checkWins,
//   flipPlayer,
//   endGame,
// };
//
//
//
//
//
// // const switch = function(){
// //   if(turns = 0){
// //
// //   }
// // };
