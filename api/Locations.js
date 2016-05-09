
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
	]



};

exports.getRandomLocation = function(newLocations){

	var randomIndex = Math.floor(Math.random()*newLocations.length);
	
	return newLocations[randomIndex];

}

exports.getRandomLocations = function(){

	//does not gaurantee a certain number of locations to be given

	var randomLocs = [];

	for(key in locations){
			
		if(!locations.hasOwnProperty(key)){
			continue;
		}
		

		var rand = Math.random();

		if(rand>.5){
			randomLocs.push(key);
		}
	}

	return randomLocs;

}

exports.getRandomRoles = function(location, numPlayers){

	//not the most effecient thing I have written

	var roles = locations[location];

	var newRoles = new Set();

	while(newRoles.size < numPlayers){

		var randomIndex = Math.floor(Math.random()*roles.length);

		newRoles.add(roles[randomIndex]);
	}

	return [...newRoles];
}
