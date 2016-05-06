import {JOIN_GAME} from '../actions/actions';

function RoleReducer(role='', action){

	switch(action.type){

		case JOIN_GAME:
			return action.role;

		default:
			return role;

	}
}

export default RoleReducer;
