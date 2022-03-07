import './App.scss';

import React, { Component } from 'react';
import TaskPage from './TaskPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskPage />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
