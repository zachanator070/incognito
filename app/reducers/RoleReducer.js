import {JOIN_GAME,LEAVE_GAME,CHANGE_GAME_STATE} from '../actions/actions';

function RoleReducer(role='', action){

	switch(action.type){

		case LEAVE_GAME:
			return '';
		case CHANGE_GAME_STATE:
			return action.role;

		default:
			return role;

	}
}

export default RoleReducer;
