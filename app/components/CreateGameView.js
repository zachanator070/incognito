
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import $ from 'jquery';

import CreateButton from '../containers/CreateButton';

class CreateGameView extends Component{

  render (){
    return (
      <div className='slideLeft text-center'>

        <div className='row padding5'>
          <div className='col-xs-3'></div>
          <div className='col-xs-1 padding5'>Username:</div>
          <div className='col-xs-4'>
            <input className='form-control' width='10%' type="text" id="username" placeholder='AwesomeMan007'/>
          </div>
        </div>

        <div className='row padding5'>
          <CreateButton/>
        </div>

      </div>
    );
  }
}

export default CreateGameView;
