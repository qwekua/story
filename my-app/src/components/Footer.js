// components/Footer.js
import React from 'react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-gradient">Yung Story</span>
            <p>Official Website</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Music">Music</a></li>
                <li><a href="#Videos">Videos</a></li>
                <li><a href="#Support">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                <li><a href="https://apple.com/music" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                <li><a href="https://youtube.com/music" target="_blank" rel="noopener noreferrer">YouTube Music</a></li>
                <li><a href="https://audiomark.com" target="_blank" rel="noopener noreferrer">Audiomark</a></li>
                <li><a href="https://tubidy.com" target="_blank" rel="noopener noreferrer">Tubidy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Follow</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              
              <div className="newsletter">
                <h3>Stay Updated</h3>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Yung story. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
