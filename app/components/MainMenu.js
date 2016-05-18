

import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

import Bootstrap from "../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import SCSS from "../css/app.scss";

class MainMenu extends Component{

  render(){
    return <div>
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
