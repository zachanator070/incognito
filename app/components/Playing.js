import React, {Component} from 'react';
import $ from 'jquery';

import ActionButton from './ActionButton';

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

		this.startTimer(60,$('#countdown'));

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
					<div className='col-xs-4 text-right'>Location:</div>
					<div className='col-xs-4'>{this.props.location}</div>
				</div>
			);
		}

	}

	renderLocations(locations){

		return locations.map((value)=>{

			return (<li> {value}</li>);

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
			link.attr('onclick', '').click(this.hideInfo(false));
		}
		else{
			info.css('display','block');
			link.text('Hide Info');
			link.attr('onclick', '').click(this.hideInfo(true));
		}

	}

	render(){

		return (
		<div>
				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-4 text-right'>Time:</div>
					<div className='col-xs-4'><div id='countdown'></div></div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-4 text-right'>GameId:</div>
					<div className='col-xs-4'>{this.props.gameId}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-4 text-right'>Game Host:</div>
					<div className='col-xs-4'>{this.props.creator}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-4 text-right'>Username:</div>
					<div className='col-xs-4'>{this.props.username}</div>
				</div>

				<div className='row text-center'>
					<a onClick={this.hideInfo} id='hideLink'>Hide Info</a>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div id='sensitiveInfo' className='form-control'>
						{this.renderLocation()}

						<div className='row'>
							<div className='col-xs-2'></div>
							<div className='col-xs-4 text-right'>Role:</div>
							<div className='col-xs-4'>{this.props.role}</div>
						</div>
					</div>
				</div>

				<div className='row text-center'>

					Players in Game:

						<ul>
							{this.renderPlayers(this.props.players)}
						</ul>

				</div>

				<div className='row text-center'>
					Possible Locations:
					<ul>
						{this.renderLocations(this.props.possibleLocations)}
					</ul>
				</div>

				{this.renderEndGameButton()}
			</div>

		);

	}

}


export default PlayingView;
