
import React , {Component} from 'react';

class Frame extends Component{

  render(){
    return <div>
        {this.props.children}
      </div>;
  }

}

export default Frame;
