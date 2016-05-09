

'use strict';

//express server with added routes to be included in the public facing api

var Express = require('express');
var Game = require('./models/Game.js');
var RandomId = require('./RandomId.js');
var bodyParser = require('body-parser');
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
	Game.create({creator: req.body.username, gameId: RandomId(), players:[req.body.username], possibleLocations:[...possibleLocations], location: location}, (err, results) =>{

		//if the game was created the we return the game in json format
		if(err){
			return res.status(400);
		}
		console.log("created a game:"+results);
		return res.status(200).json(results);

	});

});


Api.get('/games', (req,res) =>{


	/* request should have a body that is formatted:
		{
			gameId: value
		}
	*/

	Game.findOne({gameId:req.body.gameId}, (err, results) =>{

		if(err){
			return res.send(400);
		}

		if(!results){
			return res.send(404);
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


	Game.update({gameId: req.body.gameId},{ $push: {players:req.body.player}}, (err, results) =>{

		if(err){
			return res.send(400);
		}

		if(!results){
			return res.send(404);
		}

		return res.status(200).json(results);

	});

});


Api.delete('/games', (req,res) => {




});

module.exports = Api;
