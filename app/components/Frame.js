
import React , {Component} from 'react';
import {createStore} from 'redux';

import AppReducer from '../reducers/AppReducer.js';

let store = createStore(AppReducer);


class Frame extends Component{

  render(){
    return <div>
        {this.props.children}
      </div>;
  }

}

export default Frame;
