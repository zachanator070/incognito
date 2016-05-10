
import {JOIN_GAME, LEAVE_GAME} from '../actions/actions';

function UsernameReducer(username="", action){

	switch(action.type){

		case JOIN_GAME:
			return action.username;
		default:
			return username;

	}
}

export default UsernameReducer;
