
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createChangeGameStateAction, GameStates} from '../actions/actions';

import Playing from '../components/Playing';

const mapStateToProps = (state) => {

	console.log(JSON.stringify(state));

	return {
		gameId: state.gameId,
		creator: state.creator,
		players: state.players,
		username: state.username,
		possibleLocations: state.possibleLocations,
		role: state.role,
		location: state.location
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {
		onEndGame: () => {
			//need to put request to server here to end the game
			dispatch(createChangeGameStateAction(GameState.SETUP));
		}
	}

}

const PlayingView =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Playing);

export default PlayingView;
