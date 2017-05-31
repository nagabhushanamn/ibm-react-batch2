import React, { Component } from 'react';


class BoxComponent extends Component {

    render() {

        let allChilds = this.props.children.map((child, idx) => {
            return (
                <div className="list-group-item" key={idx}>
                    {child}
                </div>
            );
        })

        return (
            <div className="well list-group">
                {allChilds}
            </div>
        );
    }
}

export default BoxComponent;