
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory} from 'react-router';

import MainMenu from './MainMenu';

class App extends Component {

	render(){
		return <Router>
			<Route path="/" component={MainMenu} />
			<Route path="/joinGame" component={JoinGame} />
			<Route path="/createGame" component={CreateGame} />
		</Router>;

	}
}


ReactDOM.render( <App/>,document.getElementById("root"));
