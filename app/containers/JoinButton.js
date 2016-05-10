
import React, {Component} from 'react';
import ActionButton from '../components/ActionButton';
import {dispatch} from 'redux';

import {browserHistory} from 'react-router';
import $ from 'jquery';

import {createJoinGameAction} from '../actions/actions.js';

import {connect} from 'react-redux';

import socket from '../socket.js';

const mapStateToProps = (state) => {

	return {
		value: "Join Game"
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {

		onclick: ()=>{

			let gameId = $('#gameId').val();
			let username = $('#username').val();

			console.log("sending data"+JSON.stringify({gameId: gameId , username:  username}));

			$.ajax({
    				contentType: 'application/json',
   					data: JSON.stringify({gameId: gameId, player: username }),
    				method: "post",
      			url: "/games/join",
    				success: (data,status)=>{
							browserHistory.push("/playing");
							console.log("got back status:"+status+" with data: \n gameId:"+data.gameId+"\n creator: "+data.creator+"\n player username: "+data.creator+"\n players in game:"+data.players+"\n possible locations:" +data.possibleLocations+"\n current location:"+data.location);
							dispatch(createJoinGameAction(data.gameId, data.creator, data.creator, data.players,data.location, data.possibleLocations));
							socket.emit('room',data.gameId);
							socket.emit("PLAYER_JOINED",{gameId: gameId,player:username});
						},
    				error: (req,textStatus, error)=>{$('#error').text(error+": status code "+req.statusCode());}
  			});

		}
	};

}

const JoinButton =  connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionButton);

export default JoinButton;
