
import React, {Component} from 'react';
import ActionButton from '../components/ActionButton';
import {dispatch} from 'redux';

import {browserHistory} from 'react-router';
import $ from 'jquery';

class CreateButton extends Component {

	createGame(){
    		//console.log("call some api call then use browserHistory.push('someurl') here");
    		//tell the server to create the game in the database

   		console.log("sending data"+JSON.stringify({username: $('#username').val() }));

		$.ajax({
      			contentType: 'application/json',
     			data: JSON.stringify({username: $('#username').val() }),
      			method: "put",
      			url: "/games",
      			success: (data,status)=>{
				browserHistory.push("/playing");
				console.log("got back status:"+status+" with data:"+data.gameId+" "+data.creator+" "+data.players);
			},
      			error: (req,error)=>{console.log('unable to create game, got message: '+error);}
    		});
  	}


	render(){

		return <ActionButton onclick={this.createGame} value='Create Game'/>;
	}

}

export default CreateButton;

