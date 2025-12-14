import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const taglines = [
    "Real Insights. Real Trends. Real Financial Power.",
    "Money doesn't grow overnight — but smart decisions do.",
    "Financial freedom begins with financial awareness.",
    "Financial success is not magic — it's discipline.",
    "Small investments today become big tomorrow."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Financial Updates</span>
          </div>
          
          <div className="tagline-slider">
            <div className="tagline-container">
              {taglines.map((tagline, index) => (
                <h1
                  key={index}
                  className={`hero-title ${index === currentIndex ? 'active' : ''}`}
                >
                  {tagline}
                </h1>
              ))}
            </div>
            <div className="slider-indicators">
              {taglines.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <p className="hero-description">
           Get expert tips on boosting your credit score, choosing smart credit cards, and managing debt for a stronger financial future.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-button">
              Explore Services
              <FiArrowRight className="button-icon" />
            </button>
            <button className="secondary-button">
              Read Articles
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-container">
            <div className="investment-tips-slider">
              {taglines.map((tagline, index) => (
                <div
                  key={index}
                  className={`tip-card ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="tip-icon">💡</div>
                  <div className="tip-content">
                    <h3 className="tip-title">Investment Tip</h3>
                    <p className="tip-text">{tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
