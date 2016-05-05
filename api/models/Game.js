'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema({
	
	gameId: String,
	creator: String,
	players: []

});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;
