'use strict';

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var GameSchema = new Schema({
	
	gameId: String,
	creator: String,
	players: []

});

var Game = Mongoose.model('Game', GameSchema);

module.exports = Game;

