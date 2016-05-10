// setup Express
var Api = require('./api/Api.js');
var io = require('./api/socket.js');
// setup mongoose
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/db');

// start the server
io = io.attach(Api);

Api.listen(3000, function () {
  console.log("Started on port 3000");
});
