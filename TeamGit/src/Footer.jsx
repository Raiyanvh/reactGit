import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h2>TeamGit</h2>
        </div>
        <div className="footer-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">📘</a>
          <a href="#" className="social-icon">🐦</a>
          <a href="#" className="social-icon">📷</a>
          <a href="#" className="social-icon">💼</a>
        </div>
        <div className="footer-contact">
          <p>Email: info@teamgit.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Team Street, Git City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TeamGit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;