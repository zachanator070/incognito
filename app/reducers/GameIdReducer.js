
import {JOIN_GAME,LEAVE_GAME} from "../actions/actions";


function GameIdReducer(gameId="", action){

	switch	(action.type){

		case JOIN_GAME:
			return action.gameId;

		case LEAVE_GAME:
			return "";

		default:
			return gameId;

	}
}

export default GameIdReducer;
