
import React, { Component, PropTypes } from 'react';

class HitButtonComponent extends Component {

    constructor(props) {
        super(props);
        console.log('HitButtonComponent instantiated');
    }

    handleClick() {
        let { incBy, onClick } = this.props;
        onClick(Number.parseInt(incBy));
    }

    render() {
        console.log('HitButtonComponent:render()');
        let { incBy } = this.props;
        return (
            <div className="box-inline">
                <button onClick={this.handleClick.bind(this)}
                    className="btn btn-primary">
                    +{incBy}
                </button>
            </div>
        );
    }

}

HitButtonComponent.propTypes = {
    incBy: PropTypes.string.isRequired
}

export default HitButtonComponent;