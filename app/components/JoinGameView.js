
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
          <div className='col-xs-2'></div>
          <div className='col-xs-4 padding5 text-right'>GameId:</div>
          <div className='col-xs-4'>
            <input className='form-control' type="text" id="gamdId" placeholder='someGameCode1337'/>
          </div>
          <div className='col-xs-2'></div>
        </div>

        <div className='row padding10'>
          <div className='col-xs-2'></div>
          <div className='col-xs-4 padding5 text-right'>Username:</div>
          <div className='col-xs-4'>
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
