import React, { Component } from 'react';
import classnames from "classnames";

import TodoTextInput from './TodoTextInput';

class ToodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    handleSubmit(text) {
        let { editTodo, deleteTodo, todo } = this.props;
        if (text) {
            editTodo(todo.id, text);
        } else {
            deleteTodo(todo.id);
        }
        this.setState({ editing: false });
    }

    renderTodo() {
        let { todo, deleteTodo, completeTodo } = this.props;
        if (!this.state.editing) {
            return (
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => { completeTodo(todo.id) }} />
                    <label onDoubleClick={() => { this.setState({ editing: true }) }}>{todo.title}</label>
                    <button className="destroy" onClick={() => { deleteTodo(todo.id) }}></button>
                </div>
            );
        } else {
            return (
                <TodoTextInput
                    title={todo.title}
                    onSubmit={this.handleSubmit.bind(this)}
                />
            );
        }
    }

    render() {
        let { todo } = this.props;
        return (
            <li className={classnames({ completed: todo.completed, edit: this.state.editing })} >
                {this.renderTodo()}
            </li>
        );
    }
}

export default ToodoItem;