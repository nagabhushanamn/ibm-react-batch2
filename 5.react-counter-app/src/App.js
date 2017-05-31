import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import HitButtonCompoent from './components/HitButtonComponent';
import DisplayComponent from './components/DisplayComponent';

class App extends Component {


  constructor(props) {
    super(props);
    console.log('App instantiated');
    this.state = {
      countValue: 0
    };
  }

  incCount(incBy) {
    this.setState({ countValue: this.state.countValue + incBy });
  }

  render() {
    console.log('App:render()');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <hr />
        <div>
          <HitButtonCompoent incBy="1" onClick={this.incCount.bind(this)} />
          <HitButtonCompoent incBy="10" onClick={this.incCount.bind(this)} />
          <HitButtonCompoent incBy="100" onClick={this.incCount.bind(this)} />
        </div>
        <hr />
        <DisplayComponent value={this.state.countValue} />
      </div>
    );
  }

}

export default App;
