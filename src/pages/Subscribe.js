import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription
    console.log('Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-hero">
        <div className="subscribe-hero-bg"></div>
        <div className="subscribe-container">
          <Link to="/" className="back-link">
            <FiArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="subscribe-hero-content">
            <div className="subscribe-icon-wrapper">
              <div className="subscribe-icon-bg"></div>
              <FiMail className="subscribe-icon" />
            </div>
            <h1 className="subscribe-hero-title">Subscribe to Financial Updates</h1>
            <p className="subscribe-hero-subtitle">
              Get the latest financial tips, credit guidance, investing trends, and money-saving 
              strategies delivered to your inbox.
            </p>
          </div>
        </div>
      </div>

      <section className="subscribe-content">
        <div className="subscribe-container">
          {!submitted ? (
            <div className="subscribe-form-card">
              <h2 className="form-title">Stay Updated</h2>
              <p className="form-description">
                Join thousands of Americans who are taking control of their financial future. 
                Get expert-backed advice delivered weekly.
              </p>
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="subscribe-input"
                  />
                </div>
                <button type="submit" className="subscribe-button">
                  Subscribe Now
                </button>
              </form>
              <p className="privacy-note">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          ) : (
            <div className="success-card">
              <FiCheckCircle className="success-icon" />
              <h2 className="success-title">Successfully Subscribed!</h2>
              <p className="success-message">
                Thank you for subscribing to Financial Updates. Check your email to confirm your subscription 
                and start receiving our financial tips and insights.
              </p>
              <Link to="/" className="back-home-button">
                Return to Home
              </Link>
            </div>
          )}

          <div className="benefits-section">
            <h3 className="benefits-title">What You'll Get</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h4 className="benefit-item-title">Weekly Financial Tips</h4>
                <p className="benefit-item-text">Expert advice on credit, investing, and money management</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💳</div>
                <h4 className="benefit-item-title">Credit Card Insights</h4>
                <p className="benefit-item-text">Best cards, rewards strategies, and smart usage tips</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <h4 className="benefit-item-title">Market Updates</h4>
                <p className="benefit-item-text">Stay informed about economic trends and investment opportunities</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h4 className="benefit-item-title">Debt Management</h4>
                <p className="benefit-item-text">Strategies to pay off debt faster and build wealth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;

