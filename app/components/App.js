
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainMenu from './MainMenu';
import JoinGame from './JoinGame';
import Frame from './Frame';
import CreateGame from './CreateGame';

var App = <Router history={browserHistory}>
			<Route path="/" component={Frame} >
				<IndexRoute component={MainMenu}/>
				<Route path="joinGame" component={JoinGame} />
				<Route path="createGame" component={CreateGame} />
			</Route>
		</Router>;

ReactDOM.render( App,document.getElementById("root"));
