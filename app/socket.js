
import io from 'socket.io-client';

let socket = io();

socket.on('connection', function(){

	console.log("connected to server socket");

});

export default socket;
