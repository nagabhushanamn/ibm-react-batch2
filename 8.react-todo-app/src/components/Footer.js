import React, { Component } from 'react';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/todo-filters';
import classnames from 'classnames';

class Footer extends Component {

    renderFilterLink(filter, idx) {
        let { filter: currentFilter, changeFilter } = this.props;
        return (
            <li key={idx}>
                <a className={classnames({ selected: filter === currentFilter })}
                    href="#/"
                    onClick={() => { changeFilter(filter) }}>
                    {filter}
                </a>
            </li>

        );
    }

    render() {
        let { count, clearCompleted } = this.props;
        let filterLinks = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter, idx) => this.renderFilterLink(filter, idx))
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{count}</strong> item left</span>
                <ul className="filters">
                    {filterLinks}
                </ul>
                <button onClick={() => { clearCompleted() }} className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}

export default Footer;