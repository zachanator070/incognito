
//basic express server that serves the public directory

var express = require('express');

var app = express();

app.use(express.static('public'));

module.exports = app;
