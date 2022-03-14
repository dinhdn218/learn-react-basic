import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h2 className="home-page-title">
          Học ReactJS cơ bản. Công nghệ sử dụng:
        </h2>
        <p className="home-page-item">
          - ReactJS (Class Component (95%) + Function Component and Hooks (5%))
        </p>
        <p className="home-page-item"> - React Router Dom V6</p>
        <p className="home-page-item"> - SCSS</p>
        <p className="home-page-item"> - Redux</p>
        <p className="home-page-item"> - Toastify lib</p>
      </div>
    );
  }
}

export default HomePage;
