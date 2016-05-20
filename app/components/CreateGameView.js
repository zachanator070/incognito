
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import $ from 'jquery';

import CreateButton from '../containers/CreateButton';

class CreateGameView extends Component{

  render (){
    return (
      <div className='slideLeft'>

        <div className='row padding15'>
          <div className='col-xs-1'></div>
          <div className='col-xs-3 padding5 text-right'><h3>Username:</h3></div>
          <div className='col-xs-7'>
            <input className='form-control' type="text" id="username" placeholder='AwesomeMan007'/>
          </div>
        </div>

        <div className='row padding5 text-center'>
          <CreateButton/>
        </div>

        <div id='error'></div>
      </div>
    );
  }
}

export default CreateGameView;
