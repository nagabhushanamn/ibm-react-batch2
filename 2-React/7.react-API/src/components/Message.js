import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    constructor(props) {
        super(props);
        console.log('Message:constructor()');
        //this.state = {status: 'nothing'};
    }

    componentWillMount() {
        console.log('Message:componentWillMount()');
    }

    render() {
        console.log('Message:render()');
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                {message}
            </div>
        );
    }

    componentDidMount() {
        console.log('Message:componentDidMount()');
        //this.setState({ status: 'something' });
    }

    //-----------------------------------------------------------

    componentWillReceiveProps(nextProps) {
        console.log('Message:componentWillReceiveProps()');
        //console.log(this.props);
        //console.dir(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message:shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false
        else return true;
    }
    componentWillUpdate() {
        console.log('Message:componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('Message:componentDidUpdate()');
    }

    //----------------------------------------------------------

    componentWillUnmount() {
        console.log('Message:componentWillUnmount()');
        // clean up..
    }

    //----------------------------------------------------------

}

// Message.defaultProps = {
//     message: 'No Message'
// }

Message.propTypes = {
    message: PropTypes.string.isRequired
}



export default Message;