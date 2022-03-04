import logo from './logo.svg';
import './App.scss';

import React, { Component } from 'react';
import ChildComponent from './Example/ChildComponent';

class App extends Component {
  state = {
    name: 'Định',
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.name);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input
            value={this.state.name}
            onChange={(e) => this.handleChangeName(e)}
          />
          <button onClick={this.handleClick}>Click me</button>
          <ChildComponent name={this.state.name} />
        </header>
      </div>
    );
  }
}

export default App;
