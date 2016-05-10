
import React, {Component} from 'react';

import JoinButton from '../containers/JoinButton';

class JoinGameView extends Component{


  joinGame(){
    console.log("call some api call then use browserHistory.push('someurl') here");
  }

  render(){

    return <div>
      Game ID: <input type="text" id="gameId"/><br/>
      Username: <input type="text" id="username"/><br/>
      <JoinButton/>
      <div id="error"></div>
    </div>;

  }

}

export default JoinGameView;
