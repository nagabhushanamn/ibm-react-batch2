import React, { Component } from 'react';

class TodoTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.title || ''
        }
    }

    handleSubmit(event) {
        // let val = event.target.value;
        // if (event.which !== 13 || !val) return;
        // this.props.onSubmit(val);
        // event.target.value = "";

        if (event.which !== 13) return;
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });


    }

    render() {
        return (
            <input className="new-todo"
                value={this.state.value}
                placeholder={this.props.placeholder}
                autoFocus
                onKeyUp={this.handleSubmit.bind(this)}
                onChange={(e) => { this.setState({ value: e.target.value }) }}
            />
        );
    }
}

export default TodoTextInput;