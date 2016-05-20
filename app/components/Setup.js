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
			console.log("username: "+this.props.username+" creator: "+this.props.creator);
			return (<ActionButton onclick={this.props.onStartGame} value="Start Game"/>);
		}
		else{
			return;
		}

	}

	render(){

		return (
			<div>
				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-3'>GameId:</div>
					<div className='col-xs-5'>{this.props.gameId}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-3'>Game Host:</div>
					<div className='col-xs-5'>{this.props.creator}</div>
				</div>

				<div className='row'>
					<div className='col-xs-2'></div>
					<div className='col-xs-3'>Username:</div>
					<div className='col-xs-5'>{this.props.username}</div>
				</div>

				<div className='row'>

					Players in Lobby:

						<ul>
							{this.renderPlayers(this.props.players)}
						</ul>

				</div>

				<div className='row'>
						{this.renderStartButton()}
				</div>

			</div>

		);

	}

}


export default Setup;
