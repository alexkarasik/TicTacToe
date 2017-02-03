'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
require('./new');
const link = require('./auth/events.js');

$(() => {
  setAPIOrigin(location, config);
  link.addHandlers();
});
