import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="logo">TeamGit</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='resignter'>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </div>
    </nav>
  );
};

export default Nav;