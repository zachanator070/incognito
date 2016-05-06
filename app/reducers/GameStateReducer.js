
import {CHANGE_GAME_STATE, GameStates} from '../actions/actions';

function GameStateReducer( gameState = GameStates.SETUP, action){
	
	switch(action.type){
		
		case CHANGE_GAME_STATE:
			return action.gameState;
		default:
			return gameState;

	}
}

export default GameStateReducer;     
