
import React, {Component} from 'react';

class JoinGame extends Component{


  joinGame(){

  }

  render(){

    return <div>
      Game ID: <input type="text"/> <br/>
      Username: <input type="text"/> <br/>
      <button onClick="{this.joinGame}">Join Game</button>
    <div>;

  }

}

export JoinGame;
