import React, { Component } from 'react';
import NavItem from './NavItem';
import { navList } from './NavList';
import './Nav.scss';

class Nav extends Component {
  // Active Nav when refresh page
  componentDidMount = () => {
    const currentPath = window.location.pathname;
    // console.log(window.location.pathname);
  };

  handleClick = (e) => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    e.target.classList.add('active');
  };

  render() {
    return (
      <div className="nav">
        {navList.map((navItem, index) => (
          <NavItem
            path={window.location.pathname}
            initActive={0}
            index={index}
            onClick={this.handleClick}
            key={index}
            text={navItem.label}
            to={navItem.path}
          />
        ))}
      </div>
    );
  }
}

export default Nav;
