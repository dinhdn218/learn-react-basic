import React, { Component } from 'react';
import './Nav.scss';
import NavItem from './NavItem';
import { navList } from './NavList';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      // Get pathname current when refresh page
      pathCurrent: window.location.pathname,
    };
  }

  handleClick = (e) => {
    this.setState({
      pathCurrent: e.target.pathname,
    });
  };

  render() {
    const { pathCurrent } = this.state;
    return (
      <div className="nav">
        {navList.map((navItem, index) => (
          <NavItem
            pathCurrent={pathCurrent}
            key={index}
            onClick={this.handleClick}
            label={navItem.label}
            path={navItem.path}
          />
        ))}
      </div>
    );
  }
}

export default Nav;
