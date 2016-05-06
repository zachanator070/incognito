
import {JOIN_GAME} from 'redux';

function CreatorReducer(creator="", action){

	switch(action.type){
	
		case JOIN_GAME:
			return action.creator;
		
		default:
			return creator;

	}
}

export default CreatorReducer;
