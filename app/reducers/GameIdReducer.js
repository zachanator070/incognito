
import {JOIN_GAME} from "../actions/actions";


function GameIdReducer(gameId="", action){

	switch	(action.type){

		case JOIN_GAME:
			
			return action.gameId;

		default:
			return gameId;

	}
}

export default GameIdReducer;
