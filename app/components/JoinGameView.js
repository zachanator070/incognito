
import React, {Component} from 'react';

class JoinGameView extends Component{


  joinGame(){
    console.log("call some api call then use browserHistory.push('someurl') here");
  }

  render(){

    return <div>
      Game ID: <input type="text" id="gameId"/><br/>
      Username: <input type="text" id="username"/><br/>
      <button onClick={this.joinGame}>Join Game</button>
    </div>;

  }

}

export default JoinGameView;
