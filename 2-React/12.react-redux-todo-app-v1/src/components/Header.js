import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput'
class Header extends Component {

    handleSubmit(text) {
        this.props.addTodo(text);
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput onSubmit={this.handleSubmit.bind(this)} 
                                placeholder="What needs to be done?"/>
            </header>
        );
    }
}

export default Header;