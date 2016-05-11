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

		$.ajax({
			contentType: 'application/json',
			headers: {gameId: store.getState().gameId},
			method: "get",
			url: "/games",
			success: (data,status)=>{
				console.log("got back status:"+status+" with data: \n gameId:"+data.gameId+"\n creator: "+data.creator+"\n player username: "+data.creator+"\n players in game:"+data.players+"\n possible locations:" +data.possibleLocations+"\n current location:"+data.location+"\n roles:"+data.roles);
				let myRole = '';
				data.roles.forEach((role, index)=>{
					if(role.player == store.getState().username){
						myRole = role.role;
					}
				});
				store.dispatch(createChangeGameStateAction(GameStates.PLAYING, myRole));
				browserHistory.push("/playing");
			},
			error: (req,error)=>{console.log('unable to start game, got message: '+error);}
		});



});

export default socket;
