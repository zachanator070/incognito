import React, {Component} from 'react';

import ActionButton from './ActionButton';

class PlayingView extends Component{

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
					{this.props.location}
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
				gameId: {this.props.gameId}<br/>
				creator: {this.props.creator}<br/>
				{this.renderLocation()}<br/>
				role: {this.props.role}<br/>

				players: <br/>
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
