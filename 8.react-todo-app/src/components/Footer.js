import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let {count,clearCompleted}=this.props;
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{count}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button onClick={()=>{clearCompleted()}} className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}

export default Footer;