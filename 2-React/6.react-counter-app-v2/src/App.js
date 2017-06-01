import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import DisplayComponent from './components/DisplayComponent';
import HitButtonComponent from './components/HitButtonComponenet';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App instantiated');
    this.state = {
      count: 0
    };

    // setInterval(() => {
    //   this.setState({ count: ++this.state.count });
    // }, 2000);

  }

  doCount(incBy) {
    this.setState({ count: Number.parseInt(incBy, 10) + this.state.count });
  }

  render() {
    console.log('App:render()');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </div>
        <hr />
        <HitButtonComponent incBy="1" onClick={(incBy) => { this.doCount(incBy) }} />
        <HitButtonComponent incBy="10" onClick={(incBy) => { this.doCount(incBy) }} />
        <hr />
        <DisplayComponent value={this.state.count} />
      </div>
    );
  }

}

export default App;
