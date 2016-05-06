
import {JOIN_GAME, PLAYER_JOINED, PLAYER_LEFT} from '../actions/actions';

function PlayersReducer(players=[], action){

	switch(action.type){
		
		case JOIN_GAME:
			return action.players;
		
		case PLAYER_JOINED:
			return [ ...players, action.player];

		case PLAYER_LEFT:
			return players.map(
				(player) =>{
					return !(player == action.player);
				}	
			);
		
		default:
			return players;

	}
}

export default PlayersReducer;
