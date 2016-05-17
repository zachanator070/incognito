
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
		"Harry Potter",
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
	'Medieval Castle':[
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
	"Minas Tirith":[
		"Gandalf",
		"Pippen",
		"Steward of Gondor",
		"Aragorn",
		"Army of the Dead",
		"Corsair or Umbar",
		"Mumakil",
		"Attack Troll",
		"Orc",
		"Lich King"
	],
	'Death Star':[
		'Luke',
		'Emporer Palpitine',
		'Darth Vadar',
		'Admiral Akbar',
		'Lando Calrissian',
		'Wedge Antilles',
		'Tie Fighter Pilot',
		'Imperial Guard',
		'X-Wing Pilot',
		'Storm Trooper'
	],
	'Murder Mystery Party':[
		'Murderer',
		'Host of the Party',
		'Cocktail Waitress',
		'Senator',
		'Neighbor of the Host',
		'Butler',
		'Wife of the Senator',
		'Private Investigator',
		'Mistress of the Host',
		'Gardener'
	],
	'5 Star Restaurant':[
		'Head Chef',
		'Waiter',
		'Sous Chef',
		'Bus Boy',
		'Hostess',
		'Restaurant Owner',
		'Customer',
		'Food Critique',
		'Piano Player',
		'Washroom Attendant'
	],
	'Casino':[
		'Bartender',
		'Floor Manager',
		'High Roller Gambler',
		'Bouncer',
		'Security Guard',
		'Poker Dealer',
		'Back Room Gambler',
		'Investment Banker',
		'Senator',
		'Card Counter'
	],
	'Avenger Tower':[
		'Tony Stark',
		'Captain America',
		'Black Widow',
		'Hawkeye',
		'Hulk',
		'Thor',
		'Ant Man',
		'Spiderman',
		'Nick Fury',
		'Black Panther'
	],
	'Hogwarts':[
		'Hary Potter',
		'Hermione Granger',
		'Ron Weasley',
		'Neville Longbottom',
		'Severus Snape',
		'Albus Dumbledore',
		'Doby the House Elf',
		'Rubeus Hagrid',
		'Draco Malfoy',
		'Minerva McGonagall'
	],
	'Xavier\'s School for Gifted Youngsters':[
		'Dr Xavier',
		'Wolverine',
		'Storm',
		'Cyclops',
		'Rogue',
		'Ice Man',
		'Colossus',
		'Magneto',
		'Jean Gray',
		'Nightcrawler'
	],
	'Pallet Town':[
		'Ash Ketchum',
		'Ash\'s Mom',
		'Mr. Mime',
		'Professor Oak',
		'Misty',
		'Brock',
		'Gary Oak',
		'Pikachu',
		'Officer Jenny',
		'Nurse Joy'
	],
	'Hockey Game':[
		'Center',
		'Wingman',
		'Defender',
		'Goalie',
		'Coach',
		'Loadmouth Hockey Fan',
		'Consession Employee',
		'Zamboni Driver',
		'Team Owner',
		'EMT'
	],
	'Apollo 11 Launch Site':[
		'Launch Controller',
		'Flight Path Navigator',
		'Lance Armstrong',
		'Buzz Aldrin',
		'NASA CEO',
		'Rocket Engineer',
		'Saftey Inspector',
		'Launch Spectator',
		'TV Cameraman',
		'Comms Technician'
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
		newRoles.push(roles[randomIndex]);
		roles.splice(randomIndex,1);
	}

	return newRoles;

}
