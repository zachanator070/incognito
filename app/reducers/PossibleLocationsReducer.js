
import {JOIN_GAME} from '../actions/actions';

function PossibleLocationsReducer(locations=[], action){
	
	switch(action.type){
		
		case JOIN_GAME:
			return action.possibleLocations;

		default:
			return locations;

	}
}

export default PossibleLocationsReducer;
