import './App.scss';

import React, { Component } from 'react';
import TaskPage from './TaskPage';
import Nav from '../components/Nav';
import HomePage from './HomePage';
import UserPage from './UserPage';
import UserDetailPage from './TaskPage/UserDetailPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
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
