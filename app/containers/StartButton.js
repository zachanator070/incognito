
import React, {Component} from 'react';
import ActionButton from '../components/ActionButton';
import {dispatch} from 'redux';

import {browserHistory} from 'react-router';
import $ from 'jquery';

import {createJoinGameAction} from '../actions/actions.js';

import {connect} from 'react-redux';

import socket from '../socket.js';

const mapStateToProps = (state) => {

	return {
		value: "Start Game"
		}

}

const mapDispatchToProps = (dispatch) =>{

	return {

		onclick: ()=>{

			
		}
	};

}

const StartButton =  connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionButton);

export default StartButton;
