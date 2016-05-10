var request = require('request');
var Server = require('socket.io');

var io = new Server();

var connections = [];

const deleteGame = (gameId)=>{

  request({
      method:'delete',
      url:'http://localhost:3000/games',
      headers:{gameId:gameId}
    },
    (error, response, data)=>{
      if(error){
        console.log('could not delete game '+error);
        return;
      }
      if(response.statusCode==200){
        console.log('request successful, deleted game ');
      }
    });

}

io.on('connection', (socket) => {
  console.log(socket.id+' connected');

  //
  // when a user connects to a room
  //
	socket.on('room', (room) => {

		console.log('a client joined the room ' + room);
		socket.join(room);
	});

  //
  // when a user leaves a room
  //
  socket.on('leave_room', (room) => {

		console.log('a client left the room ' + room);
		socket.leave(room);
	});

  //
  // when a user joins a game
  //
  socket.on('PLAYER_JOINED', (data)=>{

    console.log("got PLAYER_JOINED event with data: "+data.gameId+" "+data.player);
    socket.to(data.gameId).emit('PLAYER_JOINED',{player:data.player});
    connections.push({socket:socket,player:data.player, gameId:data.gameId});

  });

  //
  // when a user disconnects
  //
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
            deleteGame(gameId);
          }
        }
      });

  });

});

module.exports = io;
