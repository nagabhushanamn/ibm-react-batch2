import React, { Component } from 'react';

class DisplayComponent extends Component {
    render() {
        console.log('DisplayComponent:render()');
        let { value } = this.props;
        return (
            <div className="alert alert-warning">
                count : {value}
            </div>
        );
    }
}

export default DisplayComponent;