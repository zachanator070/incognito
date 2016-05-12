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
			return (<ActionButton onclick={this.props.onEndGame} value="End Game"/>);
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
				<div>
					location:{this.props.location}
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

	render(){

		return (
			<div>
				timeleft: <div id='countdown'></div><br/>
				gameId: {this.props.gameId}<br/>
				creator: {this.props.creator}<br/>
				username: {this.props.username}<br/>
				{this.renderLocation()}<br/>
				role: {this.props.role}<br/>

				players:
				<ul>
					{this.renderPlayers(this.props.players)}
				</ul>

				possible locations:<br/>
				<ul>
					{this.renderLocations(this.props.possibleLocations)}
				</ul>

				{this.renderEndGameButton()}

			</div>

		);

	}

}


export default PlayingView;
