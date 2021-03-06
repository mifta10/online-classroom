import React from 'react';
import logo from '../assets/download.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt=""/>
      <nav>
        <a href="/courses">Courses</a>
        <a href="/orders">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        <a href="/about">About Us</a>
        </nav>
    </div>
  );
};

export default Header;