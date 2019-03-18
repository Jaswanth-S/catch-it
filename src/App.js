import React, { Component } from 'react';
//  import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent.js';
import StartComponent from'./StartComponent.js';
import GameComponent from './GameComponent.js';
import LeaderboardComponent from './LeaderboardComponent.js';

import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      newPlayer: '',
      // Players: [{
      //   name: '',
      //   done: false,
      //   score:'0'
      // }],
    }
  }
  
  newPlayerAdded(event) {
    this.setState({
      newPlayer: event.target.value,
    });
    console.log('player',this.state.newPlayer);
  }
  formSubmitted(event) {
    event.preventDefault();

    // this.setState({
    //   Players: [...this.state.Players, {
    //     name: this.state.newPlayer,
    //     done: true,
    //     score:'0'
    //   }]
    // }
    // );
  }
  
   
//  getScore(event)
//  {
//    event.preventDefault();
//    this.setState({
//      Players:[...this.state.Players,{
//       score:event.score
//      }]
//    })
//  }
  render() {
    
    return (
      <BrowserRouter>
      <div >
        <HeaderComponent />
        <Switch>
      
        <Route path="/game-start" render={ props =>
             <StartComponent
             placeholder='enter player name'
             newPlayer={this.state.newPlayer}
             formSubmitted={this.formSubmitted.bind(this)}
             newPlayerAdded={this.newPlayerAdded.bind(this)} />
       }/>

    <Route path="/game-play" render={ props =>
      <GameComponent  newPlayer={this.state.newPlayer} size={400}/>
       }/>
        <Route path="/leaderboard" render={ props =>
      <LeaderboardComponent/>
       }/>
       
        </Switch>
      </div>
</BrowserRouter>);
    
  }
}

export default App;
