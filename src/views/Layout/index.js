import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import Toast from '../../components/Toast';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Outlet />
        <Toast />
      </div>
    );
  }
}

export default Layout;
