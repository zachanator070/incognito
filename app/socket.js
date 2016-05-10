import io from 'socket.io-client';
import AppReducer from './reducers/AppReducer';

import {createPlayerJoinedAction} from './actions/actions';

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

socket.on('disconnect', () =>{

	let currentGame = store.getState().gameId;
	let currentPlayer = store.getState().username;

	socket.emit("PLAYER_LEFT",{gameId: currentGame, player: currentPlayer });

	//delete the game if you are the creator
	/*if( currentPlayer === store.getState().creator){
		$.ajax({
			contentType: 'application/json',
			data: JSON.stringify({gameId:  currentGame}),
			method: "delete",
			url: "/games",
			success: (data,status)=>{
				console.log("deleted the game "+ currentGame);
			},
			error: (req,error) =>{}
		});
	}

	//leave the game otherwise
	else{
		$.ajax({
			contentType: 'application/json',
			data: JSON.stringify({gameId: currentGame, player: currentPlayer }),
			method: "post",
			url: "/games/leave",
			success: (data,status)=>{
				socket.emit("PLAYER_LEFT",{gameId: currentGame, player: currentPlayer });
			},
			error: (req,error) =>{}
		});
	}*/
});

export default socket;
