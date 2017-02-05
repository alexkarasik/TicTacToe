'use strict';
// //we require the other files we worked in here, because index.js is our main file for navigation that connects everything together.
// //Our engine and the events must be conected to the API.
// I think this is actually a good place to talk about something going on I didn't really understand until a few days ago. There are 3 instances of the game board simultaneously in use at all times. My understanding is that there is the front end board, the UI server board and the local backend board. When we were first assigned this project, I thought I had completed most of it in the first half day, because I built a tic tac toe game with a front end and back end and could just configure that to connect to a server, but there was no way to go from there and manipulate what I had done to get it to work that way. The purpose of the local backend is to calculate the winner, but if we are not connecting to the API, then all that logging and data is irrelevant and not going anywhere. If we don't update the array board, we can never update who the winner is. Understanding how the API changes your code is probably the biggest thing I took away from this project and I did not take the time to read the documents slowly enough at first to have the proper and deep enough understanding of what we were being asked to do.
const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
require('./new');
const link = require('./auth/events.js');

//not having the link to events.js and the addHandlers //attached caused me a number of problems.
$(() => {
  setAPIOrigin(location, config);
  link.addHandlers();
});
