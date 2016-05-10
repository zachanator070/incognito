
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
		value: "Create Game"
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {

		onclick: ()=>{

			console.log("sending data"+JSON.stringify({username: $('#username').val() }));

			$.ajax({
    				contentType: 'application/json',
   					data: JSON.stringify({username: $('#username').val() }),
    				method: "put",
      			url: "/games",
    				success: (data,status)=>{
							browserHistory.push("/setup");
							console.log("got back status:"+status+" with data: \n gameId:"+data.gameId+"\n creator: "+data.creator+"\n player username: "+data.creator+"\n players in game:"+data.players+"\n possible locations:" +data.possibleLocations+"\n current location:"+data.location);
							dispatch(createJoinGameAction(data.gameId, data.creator, data.creator, data.players,data.location, data.possibleLocations));
							socket.emit('room',data.gameId);
							socket.emit('PLAYER_JOINED',{gameId:data.gameId,player:data.creator});
						},
    				error: (req,error)=>{console.log('unable to create game, got message: '+error);}
  			});

		}
	};

}

const CreateButton =  connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionButton);

export default CreateButton;
