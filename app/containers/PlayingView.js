
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createChangeGameStateAction, GameStates} from '../actions/actions';

import GameView from '../components/GameView';

const mapStateToProps = (state) => {

	return {
		gameId: state.gameId,
		creator: state.creator,
		players: state.players,
		location: state.location,
		possibleLocations: state.possibleLocations,
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {
		onStartGame: () => {
			dispatch(createChangeGameStateAction(GameState.PLAYING)); 
		},
	}

}

const PlayingView =  connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);

export default PlayingView;
