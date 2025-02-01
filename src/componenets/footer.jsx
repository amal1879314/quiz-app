// Footer.jsx
import React from 'react';
import './Footer.css'; // Optional: if you want to style it in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p class="fot">&copy; 2024 My App. All rights reserved.</p>
      <p class="foot">Follow us: 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;
