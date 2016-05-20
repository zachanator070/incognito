
import React, {Component} from 'react';

import JoinButton from '../containers/JoinButton';

class JoinGameView extends Component{


  joinGame(){
    console.log("call some api call then use browserHistory.push('someurl') here");
  }

  render(){

    return (
      <div className='slideLeft text-center'>

        <div className='row padding10'>
          <div className='col-xs-2'></div>
          <div className='col-xs-3 padding5'>GameId:</div>
          <div className='col-xs-5'>
            <input className='form-control' type="text" id="gamdId" placeholder='someGameCode1337'/>
          </div>
          <div className='col-xs-2'></div>
        </div>

        <div className='row padding10'>
          <div className='col-xs-2'></div>
          <div className='col-xs-3 padding5'>Username:</div>
          <div className='col-xs-5'>
            <input className='form-control' type="text" id="username" placeholder='AwesomeMan007'/>
          </div>
          <div className='col-xs-2'></div>
        </div>

        <div className='row padding5'>
          <JoinButton/>
        </div>

        <div id="error"></div>

      </div>
    );

  }

}

export default JoinGameView;
