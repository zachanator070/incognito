import {JOIN_GAME,LEAVE_GAME,CHANGE_GAME_STATE} from '../actions/actions';

function RoleReducer(role='', action){

	switch(action.type){

		case LEAVE_GAME:
			return '';
		case CHANGE_GAME_STATE:
			console.log('reducer is updating role in state to be '+action.role);
			return action.role;

		default:
			return role;

	}
}

export default RoleReducer;
