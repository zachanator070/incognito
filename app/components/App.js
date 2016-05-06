
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainMenu from './MainMenu';
import JoinGameView from './JoinGameView';
import Frame from './Frame';
import CreateGameView from './CreateGameView';

var App = <Router history={browserHistory}>
		<Route path="/" component={Frame} >
			<IndexRoute component={MainMenu}/>
			<Route path="joinGame" component={JoinGameView} />
			<Route path="createGame" component={CreateGameView} />
		</Route>
	</Router>;

ReactDOM.render( App,document.getElementById("root"));
