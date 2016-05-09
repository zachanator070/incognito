
import {JOIN_GAME} from '../actions/actions';

function CreatorReducer(creator="", action){

	switch(action.type){
	
		case JOIN_GAME:
			console.log('creator reducer caught value:' + action.creator);
			return action.creator;
		
		default:
			return creator;

	}
}

export default CreatorReducer;
