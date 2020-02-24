// setup Express
var Api = require('./api/Api.js');
var io = require('./api/socket.js');

var server = require('http').createServer(Api);

// start the server
io = io.attach(server);

server.listen(5000, function () {
  console.log("Started on port 5000");
});
