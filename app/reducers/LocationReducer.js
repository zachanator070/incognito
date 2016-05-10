
import {JOIN_GAME, LEAVE_GAME} from '../actions/actions';

function LocationReducer(location='', action){

	switch(action.type){

		case JOIN_GAME:
			return action.location;

		case LEAVE_GAME:
			return "";

		default:
			return location;

	}
}

export default LocationReducer;
