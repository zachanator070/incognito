
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

			$.ajax({
				contentType: 'application/json',
				data: JSON.stringify({gameId:  store.getState().gameId}),
				method: "post",
				url: "/games/end",
				success: (data,status)=>{
					console.log("got back status:"+status+" with data: "+JSON.stringify(data));
					socket.emit('END_GAME',store.getState().gameId);
				},
				error: (req,error)=>{console.log('unable to start game, got message: '+error);}

			});

		}
	}
	
}

const PlayingView =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Playing);

export default PlayingView;
