import React, {Component} from 'react';

import ActionButton from './ActionButton';

class Setup extends Component{

	renderPlayers(players){

		return players.map((value)=>{

			return (<li> {value}</li>);

		});

	}

	renderStartButton(){

		if(this.props.username == this.props.creator){
			return (<ActionButton onclick={this.props.onStartGame} value="Start Game"/>);
		}
		else{
			return;
		}

	}

	render(){

		return (
			<div>
				gameId: {this.props.gameId}<br/>
				creator: {this.props.creator}<br/>

				players: <br/>
				<ul>
					{this.renderPlayers(this.props.players)}
				</ul>
				{this.renderStartButton()}
			</div>

		);

	}

}


export default Setup;
