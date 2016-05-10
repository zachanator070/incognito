
import {JOIN_GAME,LEAVE_GAME} from '../actions/actions';

function PossibleLocationsReducer(locations=[], action){

	switch(action.type){

		case JOIN_GAME:
			return action.possibleLocations;

		case LEAVE_GAME:
			return [];

		default:
			return locations;

	}
}

export default PossibleLocationsReducer;
