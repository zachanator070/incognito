
import React , {Component} from 'react';
import {createStore} from 'redux';

class Frame extends Component{

  render(){
	return (
			<div>
        			{this.props.children}
			</div>
	);
  }

}

export default Frame;
