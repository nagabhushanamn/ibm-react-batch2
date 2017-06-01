import React, { Component } from 'react';
import Comment from './Comment';

import DataSource from '../ds/DataSource';

import {withSubscription} from '../hoc'

class CommentList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //"DataSource" is some global data source
    //         comments: DataSource.getComments()
    //     };
    // }    

    // componentDidMount() {
    //     // Subscribe to changes
    //     DataSource.addChangeListener(this.handleChange);
    // }

    // componentWillUnmount() {
    //     // Clean up listener
    //     DataSource.removeChangeListener(this.handleChange);
    // }

    // handleChange() {
    //     // Update component state whenever the data source changes
    //     this.setState({
    //         comments: DataSource.getComments()
    //     });
    // }

    render() {
        let comments = this.props.data.map((comment, idx) => <Comment key={idx} comment={comment}/>);
        return (
            <div className="list-group col-md-6 col-sm-6">
                {comments}
            </div>
        );
    }
}


// export default CommentList;

export default withSubscription(CommentList, (DataSource, props) => { return DataSource.getComments() });