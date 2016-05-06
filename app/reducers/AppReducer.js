
import {combineReducers} from 'redux';

import GameIdReducer from './GameIdReducer';
import GameStateReducer from './GameStateReducer';
import UsernameReducer from './UsernameReducer';
import PlayersReducer from './PlayersReducer';
import LocationReducer from './LocationReducer';
import PossibleLocationsReducer from './PossibleLocationsReducer';
import RoleReducer from './RoleReducer';
import CreatorReducer from './CreatorReducer';

const AppReducer = combineReducers({

	gameId: GameIdReducer,
	gameState: GameStateReducer,
	username: UsernameReducer,
	players: PlayersReducer,
	location: LocationReducer,
	possibleLocations: PossibleLocationsReducer,
	role: RoleReducer,
	creator: CreatorReducer
});

export default AppReducer ;
