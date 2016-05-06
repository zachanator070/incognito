
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import $ from 'jquery';

import CreateButton from '../containers/CreateButton';

class CreateGameView extends Component{ 

  render (){
    return (<div>
        Username: <input type="text" id="username"/>
        <CreateButton/>
      </div>
    );
  }
}

export default CreateGameView;
