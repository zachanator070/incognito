

'use strict';

//express server with added routes to be included in the public facing api

var api = require('./express.js');

var Game = require('./models/Game.js');

var RandomId = require('./RandomId.js');

api.put('/games',(req,res) => {
	/* request should have a body that is formatted:
		{
			username: value
		}
	*/

	Game.create({creator: req.body.username, gameId: RandomId(), players:[req.body.username]}, (err, results) =>{
	
		//if the game was created then we return the game in json format
		if(err){
			return res.status(400);
		}

		return res.status(200).json(results);

	}); 

});


api.get('/games', (req,res) =>{

	
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


api.post('/games/join', (req,res) => {


	/* request should have a body that is formatted:
		{
			gameId: value,
			player: value
		}
	*/

	
	Game.update({gameId: req.body.gameId},{ $push: {players:req.body.player}, (err, results) =>{
		
		if(err){
			return res.send(400);
		}
		
		if(!results){
			return res.send(404);
		}

		return res.status(200).json(results);

	});

});


api.delete('/gmaes', (req,res) => {




});


module.exports = api;

