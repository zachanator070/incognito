
export const JOIN_GAME = 'JOIN_GAME';
export const CHANGE_GAME_STATE = 'CHANGE_GAME_STATE';
export const PLAYER_JOINED = 'PLAYER_JOINED';
export const PLAYER_LEFT = 'PLAYER_LEFT';
export const LEAVE_GAME = 'LEAVE_GAME';

export const GameStates = {

	SETUP :"SETUP",
	PLAYING : "PLAYING"

}

export function createJoinGameAction(gameId, creator, username, players,location, possibleLocations){

	return {type: JOIN_GAME,
		gameId: gameId,
		username: username,
		players: players,
		location: location,
		possibleLocations: possibleLocations,
		creator:creator};
}

export function createChangeGameStateAction(gameState, role=''){
	debugger;
	return {type: CHANGE_GAME_STATE, gameState: gameState, role: role};
}

export function createPlayerJoinedAction(player){

	return {type: PLAYER_JOINED, player: player};
}

export function createPlayerLeftAction(player){

	return {type: PLAYER_LEFT, player: player};
}

export function createLeaveGameAction(){

	return {type: LEAVE_GAME};
}
