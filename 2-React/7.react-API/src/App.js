import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Message from './components/Message';
import User from './components/User';
import BoxComponent from './components/BoxComponent';

import ProductList from './components/ProductList';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App:constructor')
    this.state = {
      greetMessage: '',
      products: [
        { name: 'Laptop', price: 198000, description: 'new mac pro' },
        { name: 'Mobile', price: 18000, description: 'new pro' }
      ]
    };
  }

  doGreet() {

    if (this.state.greetMessage) {
      return (
        <Message message={this.state.greetMessage} />
      );
    } else {
      return null;
    }

  }

  render() {
    console.log('App:render()');
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </div>
        <hr />

        <button className="btn btn-default" onClick={() => this.setState({ greetMessage: 'Good Morning' })}>say GM</button>
        <button className="btn btn-default" onClick={() => this.setState({ greetMessage: 'Good Noon' })}>say GN</button>
        <button className="btn btn-default" onClick={() => this.setState({ greetMessage: 'Good Evening' })}>say GE</button>
        <button className="btn btn-default" onClick={() => this.setState({ greetMessage: '' })}>Remove Message</button>
        <button className="btn btn-default" onClick={() => { this.forceUpdate(); }}>Force Re-render</button>
        <hr />

        {this.doGreet()}

        <BoxComponent>
          <Message message={"Hello"} />
          <Message message={"Hi"} />
        </BoxComponent>


        <ProductList products={this.state.products} color={"#def"} />


      </div>
    );
  }

}

export default App;
