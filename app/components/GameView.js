import React, {Component} from 'react';

class GameView extends Component{

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
				location: {this.props.location}<br/>
				
				players: <br/>
				<ul>
					{this.renderPlayers(this.props.players)}
				</ul>

				possible locations:<br/>
				<ul>
					{this.renderLocations(this.props.possibleLocations)}
				</ul>
				
			</div>

		);

	}

}


export default GameView;
