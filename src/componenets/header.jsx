// Header.jsx
import React from 'react';
import './Header.css'; // Optional: if you want to style it in a separate CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><i class="fa-solid fa-brain"></i>
        <h1  class="brain">BrainBlast</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
