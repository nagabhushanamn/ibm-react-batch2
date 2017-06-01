import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import CommentList from './components/CommentList';
import TopicList from './components/TopicList';

class App extends Component {

  hanleTopicSelect(topic) {
    console.log(`${topic} selected...`);
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">Sample App</div>
        <CommentList />
        <TopicList onTopicSelect={this.hanleTopicSelect.bind(this)}/>
      </div>
    );
  }
}

export default App;
