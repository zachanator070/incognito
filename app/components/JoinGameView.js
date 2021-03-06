
import React, {Component} from 'react';

import JoinButton from '../containers/JoinButton';

class JoinGameView extends Component{


  joinGame(){
    console.log("call some api call then use browserHistory.push('someurl') here");
  }

  render(){

    return (
      <div className='slideLeft'>

        <div className='row padding10'>
          <div className='col-xs-1'></div>
          <div className='col-xs-3 padding5 text-right'><h3>GameId:</h3></div>
          <div className='col-xs-7'>
            <input className='form-control' type="text" id="gameId" placeholder='1337n00b$'/>
          </div>
          <div className='col-xs-2'></div>
        </div>

        <div className='row padding10'>
          <div className='col-xs-1'></div>
          <div className='col-xs-3 padding5 text-right'><h3>Username:</h3></div>
          <div className='col-xs-7'>
            <input className='form-control' type="text" id="username" placeholder='AwesomeMan007'/>
          </div>
          <div className='col-xs-2'></div>
        </div>

        <div className='row padding5 text-center'>
          <JoinButton/>
        </div>

        <div id="error"></div>

      </div>
    );

  }

}

export default JoinGameView;
