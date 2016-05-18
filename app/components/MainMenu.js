

import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class MainMenu extends Component{

  render(){
    return <div>
      <div className='title'>Incognito</div>
      <Link to="/createGame">
        <div className="row">
          <div className="btn btn-default">Create Game</div>
        </div>
      </Link>
      <Link to="/joinGame">
        <div className="row">
          <div className="btn btn-default">Join Game</div>
        </div>
      </Link>
    </div>;
  }

}

export default MainMenu;
