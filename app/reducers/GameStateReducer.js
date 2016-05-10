
import {CHANGE_GAME_STATE, LEAVE_GAME, GameStates} from '../actions/actions';

function GameStateReducer( gameState = GameStates.SETUP, action){

	switch(action.type){

		case CHANGE_GAME_STATE:
			return action.gameState;

		case LEAVE_GAME:
			return GameStates.SETUP;
			
		default:
			return gameState;

	}
}

export default GameStateReducer;
