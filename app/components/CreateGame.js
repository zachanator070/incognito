
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import $ from 'jquery';

class CreateGame extends Component{

  createGame(){
    //console.log("call some api call then use browserHistory.push('someurl') here");
    //tell the server to create the game in the database

    console.log("sending data"+JSON.stringify({username: $('#username').val() }));

    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify({username: $('#username').val() }),
      method: "put",
      url: "/games",
      success: ()=>{browserHistory.push("/setup");},
      error: (req,error)=>{console.log('unable to create game, got message: '+error);}
    });
  }

  render (){
    return (<div>
        Username: <input type="text" id="username"/>
        <button onClick={this.createGame}>Create Game</button>
      </div>
    );
  }
}

export default CreateGame;
