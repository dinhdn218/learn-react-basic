import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link className="nav-item active" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/task">
          Task
        </Link>
        <Link className="nav-item" to="/user">
          User
        </Link>
      </div>
    );
  }
}

export default Nav;
