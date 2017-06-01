import React, { Component } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
    render() {
        let { todos,deleteTodo,completeTodo,completeAll,editTodo } = this.props;
        let todoItems = todos.map((todo,idx) => <TodoItem todo={todo} key={idx} 
                                                          deleteTodo={deleteTodo} 
                                                          completeTodo={completeTodo}
                                                          editTodo={editTodo}/>);
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all" onClick={()=>{completeAll()}}>Mark all as complete</label>
                <ul className="todo-list">
                    {todoItems}
                </ul>
            </section>
        );
    }
}

export default MainSection;