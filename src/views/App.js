import './App.scss';

import React, { Component } from 'react';
import TaskPage from './TaskPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskPage />
      </div>
    );
  }
}

export default App;
