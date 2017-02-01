'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const engine = require('./new');
const link = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config);
  link.addHandlers();
});



//$('#id1').on('click', (event)=>){

//});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');
// require('./new');
