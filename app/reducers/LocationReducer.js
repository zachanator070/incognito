
import {JOIN_GAME, LEAVE_GAME, GAME_STATE_CHANGE} from '../actions/actions';

function LocationReducer(location='', action){

	switch(action.type){

		case GAME_STATE_CHANGE:
			return action.location;

		case LEAVE_GAME:
			return "";

		default:
			return location;

	}
}

export default LocationReducer;
