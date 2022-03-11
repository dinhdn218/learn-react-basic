import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

class NavItem extends Component {
  render() {
    const { to, text, onClick, initActive, index, path } = this.props;
    console.log(path);
    return (
      <Link
        onClick={onClick || function () {}}
        className={`nav-item ${initActive === index ? 'active' : ''}`}
        to={to}
      >
        {text}
      </Link>
    );
  }
}

export default NavItem;
