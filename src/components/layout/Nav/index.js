import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <a className="nav-item active" href="#home">
          Home
        </a>
        <a className="nav-item" href="#news">
          Task
        </a>
        <a className="nav-item" href="#contact">
          Contact
        </a>
        <a className="nav-item" href="#about">
          About
        </a>
      </div>
    );
  }
}

export default Nav;
