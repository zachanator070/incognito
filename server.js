// setup Express
var Api = require('./api/Api.js');

// setup mongoose
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/db');

// start the server

Api.listen(3000, function () {
  console.log("Started on port 3000");
});
