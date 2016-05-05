'use strict';

var makeid = () => {
    

	var colors = [
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'white',
		'black'
	];


	var nouns = [
		'car',
		'chicken',
		'cow',
		'whale',
		'man',
		'cloud',
		'chair',
		'cat',
		'dog'

	];

    return colors[Math.floor(Math.random()*colors.length)] + nouns[Math.floor(Math.random()*nouns.length)]; 
}

module.exports = makeid;
