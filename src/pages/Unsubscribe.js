import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiCheckCircle, FiArrowLeft, FiXCircle } from 'react-icons/fi';
import './Unsubscribe.css';

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle unsubscription
    console.log('Unsubscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="unsubscribe-page">
      <div className="unsubscribe-hero">
        <div className="unsubscribe-hero-bg"></div>
        <div className="unsubscribe-container">
          <Link to="/" className="back-link">
            <FiArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="unsubscribe-hero-content">
            <div className="unsubscribe-icon-wrapper">
              <div className="unsubscribe-icon-bg"></div>
              <FiXCircle className="unsubscribe-icon" />
            </div>
            <h1 className="unsubscribe-hero-title">Unsubscribe from Financial Updates</h1>
            <p className="unsubscribe-hero-subtitle">
              We're sorry to see you go. If you change your mind, you can always resubscribe later.
            </p>
          </div>
        </div>
      </div>

      <section className="unsubscribe-content">
        <div className="unsubscribe-container">
          {!submitted ? (
            <div className="unsubscribe-form-card">
              <h2 className="form-title">Unsubscribe</h2>
              <p className="form-description">
                Enter your email address to unsubscribe from our newsletter. You'll stop receiving 
                our financial tips and updates.
              </p>
              <form className="unsubscribe-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="unsubscribe-input"
                  />
                </div>
                <button type="submit" className="unsubscribe-button">
                  Unsubscribe
                </button>
              </form>
              <div className="feedback-section">
                <p className="feedback-title">Help us improve</p>
                <p className="feedback-text">
                  We'd love to know why you're unsubscribing. Your feedback helps us provide better content.
                </p>
                <textarea
                  className="feedback-textarea"
                  placeholder="Optional: Tell us why you're unsubscribing..."
                  rows="4"
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="success-card">
              <FiCheckCircle className="success-icon" />
              <h2 className="success-title">Successfully Unsubscribed</h2>
              <p className="success-message">
                You have been unsubscribed from Financial Updates. You will no longer receive our 
                newsletter emails. We're sorry to see you go!
              </p>
              <div className="success-actions">
                <Link to="/" className="back-home-button">
                  Return to Home
                </Link>
                <Link to="/subscribe" className="resubscribe-button">
                  Resubscribe
                </Link>
              </div>
            </div>
          )}

          <div className="stay-connected">
            <h3 className="stay-connected-title">Stay Connected</h3>
            <p className="stay-connected-text">
              Even if you unsubscribe from emails, you can still follow us on social media for 
              financial tips and updates.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com/financialupdates"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/financialupdates"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://threads.net/financialupdates"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Threads
              </a>
              <a
                href="https://twitter.com/FinUpdates"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </a>
              <a
                href="https://linkedin.com/company/financialupdates"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unsubscribe;

