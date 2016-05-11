

'use strict';

//express server with added routes to be included in the public facing api

var Express = require('express');
var bodyParser = require('body-parser');

var Game = require('./models/Game.js');
var RandomId = require('./RandomId.js');
var Locations = require('./Locations.js');

var Api = Express();

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

      if(game.players.length > 10){
        return res.status(400).send('Too many players');
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


	Game.findOneAndUpdate({gameId: req.body.gameId},{ $pull: {players:req.body.player}}, (err, game) =>{

    console.log('player '+req.body.player+' leaving game: '+req.body.gameId);

		if(err){
      console.log('sent 400');
			return res.send(400);
		}

		if(!game){
      console.log('sent 404');
			return res.sendStatus(404);
		}

		return res.status(200).json(game);

	});

});

Api.post('/games/start', (req,res) => {

	/* request should have a body that is formatted:
		{
			gameId: value
		}
	*/


	Game.findOneAndUpdate({gameId: req.body.gameId},{ $set: {state:'PLAYING'}}, (err, game) =>{

    console.log('starting game: '+req.body.gameId);

		if(err){
      console.log('sent 400');
			return res.send(400);
		}

		if(!game){
      console.log('sent 404');
			return res.send(404);
		}

    console.log('players before start: '+game.players);

    let players = game.players.slice();

    let roles = Locations.getRandomRoles(game.location, game.players.length-1);
    let newRoles = [];

    let spyIndex = Math.floor(Math.random()*players.length);
    debugger;

    newRoles.push({player:players[spyIndex], role: "Spy"});
    players.splice(spyIndex,1);

    players.forEach((player,index)=>{
        console.log('adding role for player: '+player);
        let roleIndex = Math.random()*roles.length;
        newRoles.push({player:player, role: roles[roleIndex]});
        roles.splice(roleIndex,1);

    });

    console.log('new roles looks like: '+JSON.stringify(newRoles));
    game.roles = newRoles;

    game.save((err)=>{

      if(err){
        return res.sendStatus(500);
      }

    });

    console.log('players after start: '+game.players);
    console.log("finished starting game");
		return res.status(200).json(game);

	});

});

Api.delete('/games', (req,res) => {

  /* request should have a header that is formatted:
    {
      gameId: value
    }
  */

  Game.remove({gameId:req.get('gameId')}, (err,results) => {

    if(err){
			return res.send(400);
		}

    return res.status(200);

  });

});

module.exports = Api;
