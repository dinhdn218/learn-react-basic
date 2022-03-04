import React, { Component } from 'react';
import ToggleComponent from './ToggleComponent';

class ChildComponent extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>This is child component</p>
        <p>prop: {name}</p>
        <br />
        <ToggleComponent />
      </div>
    );
  }
}

export default ChildComponent;
