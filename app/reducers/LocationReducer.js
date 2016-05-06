
import {JOIN_GAME} from '../actions/actions';

function LocationReducer(location='', action){
	
	switch(action.type){
		
		case JOIN_GAME:
			return action.location;

		default:
			return location;

	}
}

export default LocationReducer;

