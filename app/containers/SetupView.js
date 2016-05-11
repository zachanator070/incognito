
import React, {Component} from 'react';
import {connect} from 'react-redux';

import socket from '../socket';

import {createChangeGameStateAction, GameStates} from '../actions/actions';

import Setup from '../components/Setup';

const mapStateToProps = (state) => {

	return {
		gameId: state.gameId,
		creator: state.creator,
		players: state.players,
		username: state.username
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {
		onStartGame: () => {
			//need to put request to server here to start the game
			$.ajax({

			});

			socket.emit('START_GAME');

			dispatch(createChangeGameStateAction(GameState.PLAYING));
		},
	}

}

const SetupView =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Setup);

export default SetupView;
