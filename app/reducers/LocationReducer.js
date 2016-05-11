
import {JOIN_GAME, LEAVE_GAME, CHANGE_GAME_STATE} from '../actions/actions';

function LocationReducer(location='', action){

	switch(action.type){

		case CHANGE_GAME_STATE:
			return action.location;

		case LEAVE_GAME:
			return "";

		default:
			return location;

	}
}

export default LocationReducer;
