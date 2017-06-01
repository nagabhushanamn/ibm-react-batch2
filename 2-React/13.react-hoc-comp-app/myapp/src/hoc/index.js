import React, { Component } from 'react';
import DataSource from '../ds/DataSource'

// This function takes a component...
export function withSubscription(WrappedComponent, selectData) {

  // ...and returns another component...

  class WithSubscription extends Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} { ...this.props} />;
    }
  }

  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  return WithSubscription;

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

}