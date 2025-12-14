import React from "react";
import { FiClock } from "react-icons/fi";
import { FaBrain, FaHandshake } from "react-icons/fa";
import "./About.css";

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
          {/* Left Side - Mission */}
          <div className="about-mission">
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-paragraph">
              At Financial Updates, our mission is to help people make confident financial decisions through clear, accurate, and practical information. We break down complex topics like credit, debt, investing, and economic trends into insights that are easy to understand and apply in real life.
            </p>
            <p className="about-paragraph">
              We believe financial freedom begins with awareness, discipline, and smart choices over time. By focusing on education—not hype—we aim to empower individuals to build stronger financial habits, protect their financial future, and navigate a changing economy with clarity and confidence.
            </p>
          </div>

          {/* Right Side - Features */}
          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FaBrain className="feature-icon" />
              </div>
              <div>
                <h4 className="feature-title">Smart Financial Insights</h4>
                <p className="feature-text">
                  Clear, data-driven explanations of markets, credit, and economic trends—made simple and actionable.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FiClock className="feature-icon" />
              </div>
              <div>
                <h4 className="feature-title">Timely & Practical Guidance</h4>
                <p className="feature-text">
                  Up-to-date financial tips and strategies that help you make smarter money decisions at the right time.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FaHandshake className="feature-icon" />
              </div>
              <div>
                <h4 className="feature-title">Trust-First Financial Education</h4>
                <p className="feature-text">
                  Honest, transparent, and user-focused content designed to protect your financial future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
