import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuyComponent extends Component {
    render() {
        return (
            <div>
                <button style={{backgroundColor:this.context.color}}>buy</button>
            </div>
        );
    }
}

BuyComponent.contextTypes = {
    color: PropTypes.string
};

export default BuyComponent;