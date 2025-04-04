// components/Support.js
import React, { useState } from 'react';
import './Support.css';

export const Support = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  
  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };
  
  return (
    <div className="support-page">
      <div className="page-header">
        <div className="container">
          <h1>Support</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="support-grid">
          <div className="support-content">
            <h2 className="section-title">Support My Music</h2>
            <p className="support-message">
              Thank you for considering supporting my music journey. Your contributions help me create more music, videos, and experiences for you. Every donation, no matter the size, makes a difference and allows me to continue pursuing my passion.
            </p>
            
            <div className="support-options">
              <div className="support-option">
                <div className="option-icon">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3>Direct Support</h3>
                <p>Your donations directly support the creation of new music and videos.</p>
              </div>
              
              <div className="support-option">
                <div className="option-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <h3>Merchandise</h3>
                <p>Purchase merchandise and wear your support. Coming soon!</p>
              </div>
              
              <div className="support-option">
                <div className="option-icon">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <h3>Live Shows</h3>
                <p>Attend my shows and experience the music live.</p>
              </div>
            </div>
            
            <div className="streaming-support">
              <h3>Support Through Streaming</h3>
              <p>Stream my music on your favorite platforms to support my work.</p>
              <div className="streaming-links">
                <a href="#" className="streaming-platform">
                  <i className="fab fa-spotify"></i>
                  <span>Spotify</span>
                </a>
                <a href="#" className="streaming-platform">
                  <i className="fab fa-apple"></i>
                  <span>Apple Music</span>
                </a>
                <a href="#" className="streaming-platform">
                  <i className="fab fa-youtube"></i>
                  <span>YouTube</span>
                </a>
                <a href="#" className="streaming-platform">
                  <i className="fas fa-headphones"></i>
                  <span>Audiomark</span>
                </a>
                <a href="#" className="streaming-platform">
                  <i className="fas fa-music"></i>
                  <span>Tubidy</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="donation-form-container">
            {step === 1 ? (
              <form className="donation-form" onSubmit={handleSubmit}>
                <h2>Make a Donation</h2>
                <div className="donation-amounts">
                  <button 
                    type="button" 
                    className={`amount-btn ${donationAmount === 5 ? 'active' : ''}`}
                    onClick={() => handleAmountClick(5)}
                  >
                    $5
                  </button>
                  <button 
                    type="button" 
                    className={`amount-btn ${donationAmount === 10 ? 'active' : ''}`}
                    onClick={() => handleAmountClick(10)}
                  >
                    $10
                  </button>
                  <button 
                    type="button" 
                    className={`amount-btn ${donationAmount === 25 ? 'active' : ''}`}
                    onClick={() => handleAmountClick(25)}
                  >
                    $25
                  </button>
                  <button 
                    type="button" 
                    className={`amount-btn ${donationAmount === 50 ? 'active' : ''}`}
                    onClick={() => handleAmountClick(50)}
                  >
                    $50
                  </button>
                </div>
                
                <div className="form-group">
                  <label>Custom Amount ($)</label>
                  <input 
                    type="number" 
                    value={customAmount} 
                    onChange={handleCustomAmountChange} 
                    placeholder="Enter custom amount"
                    min="1"
                  />
                </div>
                
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Leave a message of support"
                    rows="3"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn donate-btn">
                  Donate ${customAmount || donationAmount}
                </button>
              </form>
            ) : (
              <div className="thank-you-message">
                <div className="thank-you-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h2>Thank You!</h2>
                <p>Your support means the world to me. Thank you for your generous donation of ${customAmount || donationAmount}.</p>
                <button className="btn" onClick={() => setStep(1)}>Make Another Donation</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};