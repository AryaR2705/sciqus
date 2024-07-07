import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 608) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <div className="bar">
    <header className="header">
      <nav className="nav">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
        </div>

        
        <div className="logo">Header</div>

        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </div>
  );
}

export default Header;
