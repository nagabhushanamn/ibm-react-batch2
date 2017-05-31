import React, { Component } from 'react';

class HitButtonComponent extends Component {
    render() {
        console.log('HitButtonComponent:render()');
        let { incBy } = this.props;
        return (
            <div className="box-inline">
                <button onClick={() => { this.props.onClick(incBy) }} className="btn btn-danger">
                    +{incBy}
                </button>
            </div>
        );
    }
}

export default HitButtonComponent;