import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="alert alert-warning">
                {this.props.name}
            </div>
        );
    }
}

export default User;