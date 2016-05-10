
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainMenu from './MainMenu';
import JoinGameView from './JoinGameView';
import Frame from './Frame';
import CreateGameView from './CreateGameView';

import PlayingView from '../containers/PlayingView';
import SetupView from '../containers/SetupView';

import AppReducer from '../reducers/AppReducer';

import {store} from '../socket';

var App = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Frame} >
				<IndexRoute component={MainMenu}/>
				<Route path="joinGame" component={JoinGameView} />
				<Route path="createGame" component={CreateGameView} />
				<Route path="setup" component={SetupView}/>
				<Route path="playing" component={PlayingView}/>
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render( App,document.getElementById("root"));

export default store;
