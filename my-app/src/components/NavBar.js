import React, { useState, useEffect } from 'react';
import './NavBar.css';

export const NavBar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (page, event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setActivePage(page);
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <span className="text-gradient">Yung Story</span>
        </div>
        
        <div className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li className={activePage === 'home' ? 'active' : ''}>
            <a href="#home" onClick={(e) => handleNavClick('home', e)}>Home</a>
          </li>
          <li className={activePage === 'music' ? 'active' : ''}>
            <a href="#music" onClick={(e) => handleNavClick('music', e)}>Music</a>
          </li>
          <li className={activePage === 'videos' ? 'active' : ''}>
            <a href="#videos" onClick={(e) => handleNavClick('videos', e)}>Videos</a>
          </li>
          <li className={activePage === 'support' ? 'active' : ''}>
            <a href="#support" onClick={(e) => handleNavClick('support', e)}>Support</a>
          </li>
        </ul>
        
        <div className="social-links">
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
