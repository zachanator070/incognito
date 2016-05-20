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
  // When a host starts a game
  //
  socket.on('START_GAME', (gameId) =>{

    console.log('got START_GAME for game: '+gameId);
    socket.emit('START_GAME');
    socket.to(gameId).emit('START_GAME');

  });

  //
  // when a host starts a game
  //
  socket.on('END_GAME', (gameId)=>{

    console.log('got END_GAME for game: '+gameId);
    socket.emit('END_GAME');
    socket.to(gameId).emit('END_GAME');

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
    //then find the game that they were apart of and tell the rest of the players
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


    console.log('there are now '+connections.length+" connections");
    console.log(connections);


    //need to tell the server that the user left the game
    //then need to see if the disconnected user was the creator, if so tell the other players
    request({
        headers: {'content-type' : 'application/json'},
        method: 'post',
        url: 'http://localhost:3000/games/leave',
        body: JSON.stringify({gameId:gameId, player:player})
    },
    (error,response,data)=>{
      if(error){
        console.log('could not get games '+error);
        return;
      }
      else if(response.statusCode==200){
        console.log('data got back: '+ data);
        console.log('searching for user '+player +'compared to '+ JSON.parse(data)['creator']+' results in '+ (data.creator == player));

        var isSpy = false;

        JSON.parse(data).roles.forEach((role, index)=>{
          if(role.player == player && role.role == 'Spy'){
            isSpy=true;
          }
        });

        if(JSON.parse(data).creator == player || isSpy){
          console.log('host left the game '+gameId);
          socket.to(gameId).emit("GAME_CLOSED");
          deleteGame(gameId);
        }
      }
    });

  });

});

module.exports = io;
