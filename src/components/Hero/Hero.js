import React from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Empowering the Future of Work</span>
          </div>
          
          <h1 className="hero-title">
            Work Smarter,
            <span className="gradient-text"> Anywhere</span>
          </h1>
          
          <p className="hero-description">
            Empowering professionals to stay productive, connected, and inspired — 
            wherever work happens. Experience the perfect blend of human creativity 
            and AI-powered efficiency.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-button">
              Get Started
              <FiArrowRight className="button-icon" />
            </button>
            <button className="secondary-button">
              <FiPlay className="button-icon" />
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-container">
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <div className="card-text">Productivity</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤝</div>
              <div className="card-text">Collaboration</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎓</div>
              <div className="card-text">Learning</div>
            </div>
            <div className="floating-card card-4">
              <div className="card-icon">🧠</div>
              <div className="card-text">AI-Powered</div>
            </div>
            
            <div className="central-orb">
              <div className="orb-ring ring-1"></div>
              <div className="orb-ring ring-2"></div>
              <div className="orb-ring ring-3"></div>
              <div className="orb-core"></div>
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
