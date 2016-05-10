import io from 'socket.io-client';
import AppReducer from './reducers/AppReducer';

import {browserHistory} from 'react-router';

import {createPlayerJoinedAction,createPlayerLeftAction,createLeaveGameAction} from './actions/actions';

import $ from 'jquery';

import {createStore} from 'redux';
let store = createStore(AppReducer);

export {store};

let socket = io();

socket.on('connection', ()=>{

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

export default socket;
