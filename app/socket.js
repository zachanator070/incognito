import io from 'socket.io-client';
import AppReducer from './reducers/AppReducer';

import {browserHistory} from 'react-router';

import {createPlayerJoinedAction,createPlayerLeftAction,createLeaveGameAction,createChangeGameStateAction, GameStates} from './actions/actions';

import $ from 'jquery';

import {createStore} from 'redux';
let store = createStore(AppReducer);

export {store};

let socket = io();

socket.on('connection', ()=>{

	let gameId = store.getState().gameId;
	let username = store.getState().username;

	if(gameId != "" && gameId != null){
		socket.emit('room',gameId);
		socket.emit('reconnect',username);
	}

	console.log("connected to server socket");
});

socket.on('PLAYER_JOINED',(data)=>{

	console.log("got PLAYER_JOINED from socket with data: "+data.player);

	if(data.player != store.getState().username){
			store.dispatch(createPlayerJoinedAction(data.player));
	}

});

socket.on('PLAYER_LEFT',(data)=>{

	console.log("got PLAYER_LEFT from socket with data: "+data.player);

	if(data.player != store.getState().username){
			store.dispatch(createPlayerLeftAction(data.player));
	}

});

socket.on('GAME_CLOSED',()=>{

	socket.emit('leave_room',store.getState().gameId);
	console.log('game '+store.getState().gameId+' closed');
	browserHistory.push("/joinGame");
	store.dispatch(createLeaveGameAction());

});

socket.on('START_GAME',()=>{

	console.log('got START_GAME event from server');

		$.ajax({
			contentType: 'application/json',
			headers: {gameId: store.getState().gameId},
			method: "get",
			url: "/games",
			success: (data,status)=>{
				console.log("got back status:"+status+" with data: "+JSON.stringify(data));
				let myRole = '';
				data.roles.forEach((role, index)=>{
					if(role.player == store.getState().username){
						myRole = role.role;
						console.log('my role is '+myRole);
					}
				});
				store.dispatch(createChangeGameStateAction(GameStates.PLAYING, data.location,data.possibleLocations,myRole));
				browserHistory.push("/playing");
			},
			error: (req,error)=>{console.log('unable to start game, got message: '+error);}
		});

});

socket.on('END_GAME', ()=>{

	console.log('got END_GAME event from server');
	store.dispatch(createChangeGameStateAction(GameStates.SETUP));
	browserHistory.push("/setup");
});

export default socket;
