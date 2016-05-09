// setup Express
var Api = require('./api/Api.js');

// setup mongoose
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/db');

// start the server
var http = require('http').Server(Api);

var io= require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

	socket.on('room', function(room){

		console.log('a client joined the room' + room);
		socket.join(room);
	});
});

http.listen(3000, function () {
  console.log("Started on port 3000");
});


