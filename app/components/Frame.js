
import React , {Component} from 'react';
import {createStore} from 'redux';

class Frame extends Component{

  render(){
	return (
			<div className='col-md-12 content'>
        			{this.props.children}
			</div>
	);
  }

}

export default Frame;
