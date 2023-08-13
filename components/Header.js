import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image
import './Header.css'; // Import your custom styles for the header

const Navigation = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img src={logo} alt="My Blogs" className="logo" />
        </Link>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
