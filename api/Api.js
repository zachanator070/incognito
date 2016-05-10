

'use strict';

//express server with added routes to be included in the public facing api

var Express = require('express');
var Game = require('./models/Game.js');
var RandomId = require('./RandomId.js');
var bodyParser = require('body-parser');
var Locations = require('./Locations.js');
var request = require('request');
var Api = Express();

var http = require('http').Server(Api);

var io= require('socket.io')(http);

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

    let gameId = "";
    let player = "";

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
          if(resonse.statusCode()==200){
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

Api.use(bodyParser.json());
Api.use(bodyParser.urlencoded({
  extended: true
}));

Api.use(Express.static('public'));


Api.put('/games',(req,res) => {
	/* request should have a body that is formatted:
		{
			username: value
		}
	*/
	//console.log("got info "+req.body);

	var possibleLocations = Locations.getRandomLocations();
	console.log("locations generated: "+possibleLocations);
	var location = Locations.getRandomLocation(possibleLocations);
  var gameId = RandomId();
  while(Game.where({gameId:gameId}).count() >0){
    gameId = RandomId();
  }

	Game.create({creator: req.body.username,
    gameId: gameId,
    players:[req.body.username],
    possibleLocations:[...possibleLocations],
    location: location,
    state: "SETUP"},
  (err, results) =>{

		//if the game was created the we return the game in json format
		if(err){
			return res.status(400);
		}
		console.log("created a game:"+results);
		return res.status(200).json(results);

	});

});


Api.get('/games', (req,res) =>{


	/* request should have a header that is formatted:
		{
			gameId: value
		}
	*/

	Game.findOne({gameId:req.get('gameId')}, (err, results) =>{

		if(err){
			return res.sendStatus(400);
		}

		if(!results){
			return res.sendStatus(404);
		}

		return res.status(200).json(results);
	});

});


Api.post('/games/join', (req,res) => {

	/* request should have a body that is formatted:
		{
			gameId: value,
			player: value
		}
	*/

	Game.findOne({gameId: req.body.gameId}, (err, game) =>{

		if(err || !game){
			return res.status(404).send('Specified game not found');
		}

    if(game.state === "SETUP"){

      if(game.players.indexOf(req.body.player) >-1 ){
        return res.status(400).send('Username already exists');
      }

      game.players = [...game.players, req.body.player];

      game.save((err)=>{

        if(err){
          return res.sendStatus(500);
        }

      });

      return res.status(200).json(game);

    }
    else{
      return res.status(403).send("Unable to join a game that is not in setup");
    }

	});

});

Api.post('/games/leave', (req,res) => {

	/* request should have a body that is formatted:
		{
			gameId: value,
			player: value
		}
	*/


	Game.update({gameId: req.body.gameId},{ $pull: {players:req.body.player}}, (err, results) =>{

    console.log('player '+req.body.player+' leaving game: '+req.body.gameId);

		if(err){
      console.log('sent 400');
			return res.send(400);
		}

		if(!results){
      console.log('sent 404');
			return res.send(404);
		}

		return res.status(200).json(results);

	});

});

Api.delete('/games', (req,res) => {

  /* request should have a body that is formatted:
    {
      gameId: value
    }
  */

  Game.remove({gameId:gameId}, (err,results) => {

    if(err){
			return res.send(400);
		}

    return res.status(200);

  });

});

module.exports = http;
