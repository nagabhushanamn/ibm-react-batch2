import React, { Component, PropTypes } from 'react';

class DisplayComponent extends Component {
    render() {
        console.log('DisplayComponent:render()');
        return (
            <div className="well">
                count : {this.props.value}
            </div>
        );
    }
}

DisplayComponent.propTypes = {
    value: PropTypes.number.isRequired
};

export default DisplayComponent;