import React from "react";
import { FiTrendingUp, FiShield, FiTarget, FiUsers } from "react-icons/fi";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-bg"></div>
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Financial Updates</h1>
            <p className="about-hero-subtitle">
              We're committed to helping you make smarter money decisions with clear, reliable, and up-to-date financial information.
            </p>
          </div>
        </div>

        {/* Mission & Values Side by Side */}
        <div className="about-content">
          {/* Left Side - Mission */}
          <div className="about-mission">
            <h2 className="section-title">Our Mission</h2>
            <p className="about-paragraph">
              Financial Updates was created to empower Americans with the knowledge and tools they need to take control of their financial future. We believe that financial literacy shouldn't be complicated or intimidating—it should be accessible, clear, and actionable.
            </p>
            <p className="about-paragraph">
              Our team of financial experts, researchers, and writers work tirelessly to provide you with up-to-date information on credit scores, credit cards, debt management, investing, and more. We simplify complex financial concepts so you can make informed decisions with confidence.
            </p>
          </div>

          {/* Right Side - Values */}
          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FiShield className="feature-icon" />
              </div>
              <div>
                <h3 className="feature-title">Trust & Transparency</h3>
                <p className="feature-text">
                  Honest, unbiased financial information. Affiliate relationships are clearly disclosed.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FiTarget className="feature-icon" />
              </div>
              <div>
                <h3 className="feature-title">Actionable Insights</h3>
                <p className="feature-text">
                  Our content shows you how to apply concepts to your financial situation, not just explain them.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FiTrendingUp className="feature-icon" />
              </div>
              <div>
                <h3 className="feature-title">Continuous Learning</h3>
                <p className="feature-text">
                  We track the latest trends, regulations, and market developments to keep you informed.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-wrapper">
                <FiUsers className="feature-icon" />
              </div>
              <div>
                <h3 className="feature-title">Your Success</h3>
                <p className="feature-text">
                  Supporting your journey to better credit, smarter spending, and long-term wealth building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Take Control of Your Finances?</h2>
            <p className="cta-text">
              Subscribe to our newsletter for weekly financial tips, credit guidance, and money-saving strategies.
            </p>
            <a href="/subscribe" className="cta-button">Subscribe Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
