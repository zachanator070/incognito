import {JOIN_GAME,LEAVE_GAME} from '../actions/actions';

function RoleReducer(role='', action){

	switch(action.type){

		case LEAVE_GAME:
			return '';

		default:
			return role;

	}
}

export default RoleReducer;
