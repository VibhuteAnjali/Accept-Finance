import React from 'react';
import { FiCpu, FiHeart, FiZap } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            Welcome to <span className="gradient-text">Accept Finance</span>
          </h2>
          <p className="section-description">
            We believe the future of work is digital, flexible, and human-centered.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-paragraph">
              At Accept Finance, our mission is simple: help individuals and teams thrive 
              while working online — whether you're collaborating across continents or from 
              your home office.
            </p>
            <p className="about-paragraph">
              We bring together tools, insights, and learning to help you do your best work — 
              from anywhere. We don't just work online — we help you work better online.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <FiCpu className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">AI-Powered</h4>
                  <p className="feature-text">Leverage cutting-edge AI to amplify your productivity</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <FiHeart className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">Human-Centered</h4>
                  <p className="feature-text">Technology that empowers, not replaces humanity</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <FiZap className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">Future-Ready</h4>
                  <p className="feature-text">Stay ahead with tools built for tomorrow's workplace</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-header">
                <div className="visual-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="visual-content">
                <div className="connection-visual">
                  <div className="human-node">
                    <div className="node-icon">👤</div>
                    <div className="node-label">Human</div>
                  </div>
                  <div className="connection-line">
                    <div className="pulse-dot"></div>
                  </div>
                  <div className="ai-node">
                    <div className="node-icon">🤖</div>
                    <div className="node-label">AI</div>
                  </div>
                </div>
                <div className="visual-text">
                  <p>"Bridging Minds: The Symbiosis Between Human Intelligence and Artificial Intelligence"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
