

import React, {Component} from 'react';

class MainMenu extends Component{

  createGame(){

  }

  render(){
    return <div>
      <button onClick="{this.createGame}">Create Game</button>
      <button href="">Join Game</button>
    </div>;
  }

}

export MainMenu;
