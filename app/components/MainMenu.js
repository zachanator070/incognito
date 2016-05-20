

import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

import $ from 'jquery';

class MainMenu extends Component{

  showHelp(){
      let help = $('#help');
      help.css('animation-name','showHelp');
      help.css('visibility','visible');
      help.css('opacity','1');
      help.css('top','0%');
  }

  hideHelp(){
      let help = $('#help');
      help.css('animation-name','hideHelp');
      help.css('visibility','hidden');
      help.css('opacity','0');
      help.css('top','100%');
  }

  render(){
    return (

      <div className='slideLeft'>

        <div id='menu' className='text-center'>
          <div className='title'>Incognito</div>
          <div className='padding5'><a onClick={this.showHelp}>How to play</a></div>

          <div className="row padding10">
            <Link to="/createGame">
              <div className="btn btn-default">Create Game</div>
            </Link>
          </div>

          <div className="row padding10">
            <Link to="/joinGame">
              <div className="btn btn-default">Join Game</div>
            </Link>
          </div>

        </div>

        <div className='help col-md-12' id='help'>
          <div className='close' onClick={this.hideHelp}>close [x]</div>
          <h2>Each round consists of:</h2>
          <ul>
            <li>A location that is known to everyone but the spy</li>
            <li>A list of possible locations that is visible to everyone</li>
            <li>A role assigned to you</li>
            <li>A list of all other players in the round</li>
          </ul>
          <h2>If your role is the spy:</h2>
          <ul>
            <li>You win the game by not being voted off</li>
            <li>You do NOT know about the present location</li>
            <li>Avoid suspicion by figuring out the location and answering questions
            relative to the loction</li>
            <li>Encourage confusion with false accusations</li>
            <li>Ask questions to other players to blend in and figure out where the location is</li>
          </ul>
          <h2>If your role is NOT the spy:</h2>
          <ul>
            <li>You win the game if the majority vote is against the spy</li>
            <li>You do know about the current location but keep this secret</li>
            <li>Avoid false accusations by answering questions relative to the current location and your given role</li>
            <li>Ask questions to other players to find out who the spy is</li>
          </ul>
          <h2>Round Progression:</h2>
          <p>
            Once the round starts, each player takes a turn to ask any other player a question to determine thier
            role or knowledge about the current location. At any point a player may call for a vote. If a majority vote
            is against a particular player, the round is over and the player voted off reveals thier role. If they were
            the spy, then all other players win. If they were not the spy, then the spy avoids detection and the spy wins
            the round. If time runs out and the spy has yet to be found, the spy wins.
          </p>
          <h2>Pro tips:</h2>
          <ul>
            <li>If you are the spy, look at the possible locations list and eliminate locations as players answer questions</li>
            <li>If you are not the spy, ask questions that only someone with knowledge of the current location can answer correcly</li>
            <li>Asking too specific of a question may reveal too much too soon</li>
            <li>If the spy figures out the location early in the round, it is hard to raise suspicion against them</li>
            <li>As the spy, think about another possible role that you could act as to avoid suspicion</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default MainMenu;
