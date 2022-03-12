import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

class NavItem extends Component {
  render() {
    const { path, label, onClick, pathCurrent } = this.props;
    return (
      <Link
        onClick={(e) => onClick(e) || function () {}}
        className={`nav-item ${
          pathCurrent === path ||
          pathCurrent.slice(
            0,
            pathCurrent.indexOf('/', pathCurrent.indexOf('/') + 1)
          ) === path
            ? 'active'
            : ''
        }`}
        to={path}
      >
        {label}
      </Link>
    );
  }
}

export default NavItem;
