import React, {Component} from 'react';

class ActionButton extends Component{


	render(){

		return <button onClick = {this.props.onclick}>{this.props.value}</button>;

	}




}

export default ActionButton;
