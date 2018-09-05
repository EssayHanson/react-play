import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterDisplay from './components/CounterDisplay';
import Counter from './components/Counter';
import Comment from './components/Comment';
import People from './components/People';
import Turtles from './components/Turtles';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>{this.props.name}</h2>
          <CounterDisplay />
          <Counter name={'Counter'}/>
          <Comment name={'Comment'}/>
          <People/>
          <Turtles/>
        </div>
      </div>
    );
  }
}

export default App;