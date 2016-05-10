var io= require('socket.io');

var connections = [];

io.on('connection', (socket) => {
  console.log(socket.id+' connected');

	socket.on('room', (room) => {

		console.log('a client joined the room ' + room);
		socket.join(room);
	});

  socket.on('leave_room', (room) => {

		console.log('a client left the room ' + room);
		socket.leave(room);
	});

  socket.on('PLAYER_JOINED', (data)=>{

    console.log("got PLAYER_JOINED event with data: "+data.gameId+" "+data.player);
    socket.to(data.gameId).emit('PLAYER_JOINED',{player:data.player});
    connections.push({socket:socket,player:data.player, gameId:data.gameId});

  });

  socket.on('disconnect', ()=>{

    console.log(socket.id+" disconnected");
    console.log('there were '+connections.length+" connections");
    console.log('searching...');

    var gameId = "";
    var player = "";

    //need to update the current sockets that are being kept track of
    connections = connections.filter((connection)=>{

      console.log(connection.socket.id == socket.id);

      if(connection.socket == socket){
        console.log("player "+connection.player+" left game "+connection.gameId);
        socket.to(connection.gameId).emit('PLAYER_LEFT',{player:connection.player});
        gameId = connection.gameId;
        player = connection.player;
        return false;
      }

      return true;

    });

    //need to see if the disconnected user was the creator, if so tell the other players
    console.log('there are now '+connections.length+" connections");
    console.log(connections);

    request({
        method:'get',
        url:'http://localhost:3000/games',
        headers:{gameId:gameId}
      },
      (error, response, data)=>{
        if(error){
          console.log('could not get games '+error);
          return;
        }
        if(response.statusCode==200){
          console.log('request successful, got data: '+data);
          console.log('searching for user '+player +'compared to '+ JSON.parse(data)['creator']+' results in '+ (data.creator == player));
          if(JSON.parse(data)['creator'] == player){
            console.log('host left the game '+gameId);
            socket.to(gameId).emit("GAME_CLOSED");
          }
        }
      });

  });

});

module.exports = io;
