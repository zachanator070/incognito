import React, {Component} from 'react';
import $ from 'jquery';

import ActionButton from './ActionButton';

//game time is in minutes
const gameTime = 15;

class PlayingView extends Component{

	startTimer(duration, display){

		//duration is in seconds
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);

	}

	componentDidMount(){

		this.startTimer(60*gameTime,$('#countdown'));

	}

	renderEndGameButton(){
		if(this.props.creator == this.props.username){
			return (
				<div className='row text-center'>
					<ActionButton onclick={this.props.onEndGame} value="End Game"/>
				</div>
			);
		}
		else{
			return;
		}
	}

	renderLocation(){

		if(this.props.role == "Spy"){
			return;
		}
		else{
			return (
				<div className='row padding5'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Location:</h3>
					<div className='col-xs-4'>{this.props.location}</div>
				</div>
			);
		}

	}

	changeColor(value){

		let id = "#"+value;

		let location = $(id);

		if(location.css('background-color')=='rgb(255, 255, 255)'){
			location.css('background-color','black');
			location.css('color','white');
		}
		else{
			location.css('background-color','white');
			location.css('color','black');
		}

	}

	renderLocations(locations){

		return locations.map((value, index)=>{

			if(index%2==0){

				let id = value.replace(/\s*\'*/g, '');
				let nextId = locations[index+1].replace(/\s*\'*/g, '');

					return (
						<div className='row'>
							<div className='col-xs-6 text-right'><div className='locationName' id={id} onClick={() => {this.changeColor(id)}}>{value}</div></div>
							<div className='col-xs-6'><div className='locationName' id={nextId} onClick={() => {this.changeColor(nextId)}}> {locations[index+1]}</div></div>
						</div>
						);
			}

			else{
					return '';
			}

		});

	}

	renderPlayers(players){

		return players.map((value)=>{

			return (<li> {value}</li>);

		});

	}

	hideInfo(){
		let link = $('#hideLink');
		let info = $('#sensitiveInfo');

		let showing = info.css('display') == 'block';

		if(showing){
			info.css('display','none');
			link.text('Show Info');
		}
		else{
			info.css('display','block');
			link.text('Hide Info');
		}

	}

	render(){

		return (
		<div className='slideLeft'>
				<div className='row'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Time:</h3>
					<div className='col-xs-4'><div id='countdown'></div></div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>GameId:</h3>
					<div className='col-xs-4'>{this.props.gameId}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Host:</h3>
					<div className='col-xs-4'>{this.props.creator}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Username:</h3>
					<div className='col-xs-4'>{this.props.username}</div>
				</div>

				<div className='row padding10'>
					<div className='row text-center'>
						<button className='btn hideButton' onClick={this.hideInfo} id='hideLink'>Hide Info</button>
					</div>

					<div className='col-xs-2'></div>
					<div id='sensitiveInfo' className='col-xs-8'>
						{this.renderLocation()}

						<div className='row'>
							<div className='col-xs-2'></div>
							<h3 className='col-xs-4 text-right'>Role:</h3>
							<div className='col-xs-4'>{this.props.role}</div>
						</div>
					</div>
				</div>

				<div className='row text-center'>

					<h3>Players in Game:</h3>

						<ul>
							{this.renderPlayers(this.props.players)}
						</ul>

				</div>

				<div className='row padding5'>
					<div className='row text-center'>
						<h3>Possible Locations:</h3>
					</div>
					<div className='row'>
						{this.renderLocations(this.props.possibleLocations)}
					</div>
				</div>

				{this.renderEndGameButton()}
			</div>

		);

	}

}


export default PlayingView;
