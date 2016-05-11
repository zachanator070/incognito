
import {CHANGE_GAME_STATE,LEAVE_GAME} from '../actions/actions';

function PossibleLocationsReducer(locations=[], action){

	switch(action.type){

		case CHANGE_GAME_STATE:
			return action.possibleLocations;

		case LEAVE_GAME:
			return [];

		default:
			return locations;

	}
}

export default PossibleLocationsReducer;
