

import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class MainMenu extends Component{

  render(){
    return <div>
      <Link to="/createGame"><div>Create Game</div></Link><br/>
      <Link to="/joinGame"><div>Join Game</div></Link>
    </div>;
  }

}

export default MainMenu;
