
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';

import {Provider} from 'react-redux';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainMenu from './MainMenu';
import JoinGameView from './JoinGameView';
import Frame from './Frame';
import CreateGameView from './CreateGameView';

import PlayingView from '../containers/PlayingView';

import AppReducer from '../reducers/AppReducer';

let store = createStore(AppReducer);

var App = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Frame} >
				<IndexRoute component={MainMenu}/>
				<Route path="joinGame" component={JoinGameView} />
				<Route path="createGame" component={CreateGameView} />
				<Route path="playing" component={PlayingView}/>
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render( App,document.getElementById("root"));
