// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sit amet magna dignissim tristique.</p>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media for the latest updates and promotions.</p>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
