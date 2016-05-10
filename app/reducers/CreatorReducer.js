
import {JOIN_GAME,LEAVE_GAME} from '../actions/actions';

function CreatorReducer(creator="", action){

	switch(action.type){

		case JOIN_GAME:
			return action.creator;

		case LEAVE_GAME:
			return "";

		default:
			return creator;

	}
}

export default CreatorReducer;
