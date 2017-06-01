import React, { Component } from 'react';
import 'todomvc-app-css/index.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './constants/todo-filters';
import * as actionCreators from './actions/todo-actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class App extends Component {


  constructor(props) {
    super(props);
    console.log('App instantiated');
    this.state = {
      filter: SHOW_ALL
    };
  }

  //---------------------------------------------------

  changeFilter(filter) {
    this.setState({ filter });
  }

  renderMainSectionAndFooter() {
    let { filter } = this.state;
    let { myTodos: todos, myActions: actions } = this.props;
    let activeTodoCount = todos.reduce((acc, item) => (!item.completed) ? acc + 1 : acc, 0);

    let filteredTodos = todos.filter(TODO_FILTERS[filter]);
    if (todos.length) {
      return (
        <div>
          <MainSection todos={filteredTodos} {...actions} />

          <Footer count={activeTodoCount}
            changeFilter={this.changeFilter.bind(this)}
            filter={this.state.filter}
            clearCompleted={() => { actions.clearCompleted() }} />

        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log('App:render()');
    let { myActions } = this.props;
    return (
      <section className="todoapp">
        <Header addTodo={(text) => { myActions.addTodo(text) }} />
        {this.renderMainSectionAndFooter()}
      </section>
    );
  }

}


function mapStateToProps(state) {
  return { myTodos: state.todosState };
}

function mapDispatchToProps(dispatch) {
  return {
    myActions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
