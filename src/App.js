import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import CoursePage from './views/CoursePage';
import HomePage from './views/HomePage';
import Layout from './views/Layout';
import TaskPage from './views/TaskPage';
import UnknownPage from './views/UnknownPage';
import UserDetailPage from './views/UserDetailPage';
import UserPage from './views/UserPage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="task" element={<TaskPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="user/:userId" element={<UserDetailPage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
