
import React, {Component} from 'react';
import {connect} from 'react-redux';

import socket,{store} from '../socket';

import {createChangeGameStateAction, GameStates} from '../actions/actions';

import Setup from '../components/Setup';

import $ from 'jquery';

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
				contentType: 'application/json',
				data: JSON.stringify({gameId:  store.getState().gameId}),
				method: "post",
				url: "/games/start",
				success: (data,status)=>{
					console.log("got back status:"+status+" with data: \n gameId:"+data.gameId+"\n creator: "+data.creator+"\n player username: "+data.creator+"\n players in game:"+data.players+"\n possible locations:" +data.possibleLocations+"\n current location:"+data.location+"\n game state:"+data.state);
					socket.emit('START_GAME',store.getState().gameId);
				},
				error: (req,error)=>{console.log('unable to start game, got message: '+error);}

			});
		}
	}

}

const SetupView =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Setup);

export default SetupView;
