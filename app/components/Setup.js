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
			return (
				<div className='row text-center'>
					<ActionButton onclick={this.props.onStartGame} value="Start Game"/>
				</div>
				);
		}
		else{
			return;
		}

	}

	render(){

		return (
			<div className='slideLeft'>
				<div className='row padding5'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>GameId:</h3>
					<div className='col-xs-4'>{this.props.gameId}</div>
				</div>

				<div className='row  padding5'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Host:</h3>
					<div className='col-xs-4'>{this.props.creator}</div>
				</div>

				<div className='row  padding5'>
					<div className='col-xs-2'></div>
					<h3 className='col-xs-4 text-right'>Username:</h3>
					<div className='col-xs-4'>{this.props.username}</div>
				</div>

				<div className='row text-center  padding10'>

					<h3>Players in Lobby:</h3>

						<ul>
							{this.renderPlayers(this.props.players)}
						</ul>

				</div>

				{this.renderStartButton()}

			</div>

		);

	}

}


export default Setup;
