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
          <div className="about-text">
            <h3 className="about-subtitle">Our Mission</h3>

            <p className="about-paragraph">
  At Financial Updates, we help people make confident financial decisions with clear, practical guidance on credit, debt, investing, and economic trends.
</p>

<p className="about-paragraph">
  We focus on education and smart choices to empower individuals to build strong financial habits and secure their financial future.
</p>


            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <FaBrain className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">Smart Financial Insights</h4>
                  <p className="feature-text">
                    Clear, data-driven explanations of markets, credit, and
                    economic trends—made simple and actionable.
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
                    Up-to-date financial tips and strategies that help you make
                    smarter money decisions at the right time.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <FaHandshake className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">
                    Trust-First Financial Education
                  </h4>
                  <p className="feature-text">
                    Honest, transparent, and user-focused content designed to
                    protect your financial future.
                  </p>
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
