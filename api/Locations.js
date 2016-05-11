
var exports = module.exports = {};


var locations = {

	"Submarine":[
		"Captain",
		"Radar Technician",
		"Cook",
		"Nuclear Engineer",
		"Navy Sailor",
		"Helmsman",
		"Comms Technician",
		"First Mate",
		"Engine Mechanic",
		"Torpedo Controller"
	],
	"WWII Bomber":[
		"Pilot",
		"Copilot",
		"Radio Man",
		"Paratrooper",
		"Topside Gunner",
		"Bottomside Gunner",
		"Wind Gunner",
		"Bomb Bay Controller",
		"Navigator",
		"Paratrooper Captain"
	],
	"Renaissance Fair":[
		"Knight",
		"King",
		"Jester",
		"Fair Maiden",
		"Queen",
		"Princess",
		"Petty Commoner",
		"Guy Selling Squirrel on a Stick",
		"Squire",
		"Jousting Announcer"
	],
	"Comic Con":[
		"Mario",
		"Master Chief",
		"Solid Snake",
		"Homer Simpson",
		"Ash Ketchum",
		"Goku",
		"Captain America",
		"Spiderman",
		"Superman",
		"Wolverine"
	],
	"Mines of Moria":[
		"Gandalf",
		"Frodo",
		"Sam",
		"Merry",
		"Pippin",
		"Aragorn",
		"Goblin",
		"Balrog",
		"Legolas",
		"Gimli"
	],
	"Bespin Cloud City":[
		"Luke",
		"Leia",
		"Han Solo",
		"Chewbacca",
		"C-3PO",
		"R-2D2",
		"Lando Calrissian",
		"Darth Vadar",
		"Boba Fett",
		"Storm Trooper"
	],
	"Cruise Ship":[
		"Captain",
		"First Mate",
		"Gourmet Chef",
		"Tour Guide",
		"Tourist",
		"Deck Hand",
		"Exotic Dancer",
		"Mariachi Band Member",
		"Gambler",
		"Stow Away"
	],
	"Star Killer Base":[
		'Kylo Ren',
		'Rey',
		'Finn',
		'Han Solo',
		'Chewbacca',
		'Strom Trooper',
		'Captain Phasma',
		'New Order Officer',
		'Janitor',
		'Plasma Cannon Opperator'
	],
	'Mideval Castle':[
		'King',
		'Knight',
		'Peasant',
		'Squire',
		'Queen',
		'Wall Guard',
		'Stable Man',
		'Bartender',
		'King\'s Consult',
		'Town Drunk'
	],
	'Hoth Rebel Base':[
		"Luke",
		"Leia",
		"Han Solo",
		"Chewbacca",
		"C-3PO",
		"R-2D2",
		"Darth Vadar",
		"Taun-Taun",
		"AT-AT",
		"Imperial Snow Trooper"
	],
	"Minus Tirith":[
		"Gandalf",
		"Pippen",
		"Steward of Gondor",
		"Aragorn",
		"Army of the Dead",
		"Haradrim Pirate",
		"Mumakil",
		"Attack Troll",
		"Orc",
		"Lich King"
	]

};

exports.getRandomLocation = function(newLocations){

	var randomIndex = Math.floor(Math.random()*newLocations.length);

	return newLocations[randomIndex];

}

exports.getRandomLocations = function(){

	var locationNames = Object.keys(locations);
	// var numLocations = Math.ceil(locationNames.length * .5);
	var numLocations = 10;

	var randomLocs = [];

	for(var x=0;x<numLocations;x++){
		var randomIndex = Math.floor(Math.random()*locationNames.length);
		randomLocs.push(locationNames[randomIndex]);
		locationNames.splice(randomIndex,1);
	}

	return randomLocs;

}

exports.getRandomRoles = function(location, numPlayers){

	var roles = locations[location].slice();

	var newRoles = [];

	for(var x=0;x<numPlayers;x++){
		var randomIndex = Math.floor(Math.random()*roles.length);
		newRoles.push(locationNames[randomIndex]);
		roles.splice(randomIndex,1);
	}

	return newRoles;
	
}
