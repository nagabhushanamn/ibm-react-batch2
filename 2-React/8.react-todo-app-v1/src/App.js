import React, { Component } from 'react';
import 'todomvc-app-css/index.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './constants/todo-filters';

import $ from 'jquery';


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
      todos: [
        { id: 1, title: 'Learn JavaScript', completed: true },
        { id: 2, title: 'Learn React', completed: false },
        { id: 3, title: 'Learn Redux', completed: false }
      ],
      filter: SHOW_ALL
    };
  }


  componentDidMount() {
    // $.ajax('http://localhost:8080/api/todos', {
    //   method: 'GET',
    //   success: (todos) => {
    //     this.setState({ todos });
    //   }
    // });
  }

  //---------------------------------------------------

  add(text) {
    let { todos } = this.state;
    let newTodo = {
      //id: Math.floor(Math.random() * 100),
      title: text,
      completed: false
    };

    $.ajax('http://localhost:8080/api/todos', {
      method: 'POST',
      data: JSON.stringify(newTodo),
      contentType: 'application/json',
      success: (todo) => {
        this.setState({ todos: [...todos, todo] });
      }
    });

    //this.setState({ todos: [...todos, newTodo] });
  }
  delete(id) {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }
  complete(id) {
    let { todos } = this.state;
    todos = todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
    this.setState({ todos });
  }
  edit(id, title) {
    let { todos } = this.state;
    todos = todos.map(todo => todo.id === id ? Object.assign({}, todo, { title }) : todo);
    this.setState({ todos });
  }
  completeAll() {
    let { todos } = this.state;
    let isAllCompleted = todos.every(todo => todo.completed);
    todos = todos.map(todo => Object.assign({}, todo, { completed: !isAllCompleted }));
    this.setState({ todos });
  }
  clearCompleted() {
    let { todos } = this.state;
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }


  //---------------------------------------------------

  changeFilter(filter) {
    this.setState({ filter });
  }

  renderMainSectionAndFooter() {
    let { todos, filter } = this.state;
    let activeTodoCount = todos.reduce((acc, item) => (!item.completed) ? acc + 1 : acc, 0);

    let filteredTodos = todos.filter(TODO_FILTERS[filter]);
    if (todos.length) {
      return (
        <div>
          <MainSection todos={filteredTodos}
            deleteTodo={this.delete.bind(this)}
            completeTodo={this.complete.bind(this)}
            completeAll={this.completeAll.bind(this)}
            editTodo={this.edit.bind(this)}
          />

          <Footer count={activeTodoCount}
            changeFilter={this.changeFilter.bind(this)}
            filter={this.state.filter}
            clearCompleted={this.clearCompleted.bind(this)} />

        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log('App:render()');
    return (
      <section className="todoapp">
        <Header addTodo={this.add.bind(this)} />
        {this.renderMainSectionAndFooter()}
      </section>
    );
  }

}

export default App;
