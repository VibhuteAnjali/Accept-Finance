import React from 'react';
import { FiTrendingUp, FiShield, FiTarget, FiUsers } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Financial Updates</h1>
            <p className="about-hero-subtitle">
              We're committed to helping you make smarter money decisions with clear, reliable, and up-to-date financial information.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <section className="about-content">
        <div className="about-container">

          {/* Our Mission */}
          <div className="about-intro">
            <h2 className="section-title">Our Mission</h2>
            <p className="intro-text">
              Financial Updates was created to empower Americans with the knowledge and tools they need 
              to take control of their financial future. We believe that financial literacy shouldn't be 
              complicated or intimidating—it should be accessible, clear, and actionable.
            </p>
            <p className="intro-text">
              Our team of financial experts, researchers, and writers work tirelessly to provide you with 
              up-to-date information on credit scores, credit cards, debt management, investing, and more. 
              We simplify complex financial concepts so you can make informed decisions with confidence.
            </p>
          </div>

          {/* Our Values */}
          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon-wrapper">
                  <FiShield className="value-icon" />
                </div>
                <h3 className="value-title">Trust & Transparency</h3>
                <p className="value-text">
                  We provide honest, unbiased financial information. When we recommend products or services, 
                  we clearly disclose any affiliate relationships.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <FiTarget className="value-icon" />
                </div>
                <h3 className="value-title">Actionable Insights</h3>
                <p className="value-text">
                  Our content is designed to help you take immediate action. We don't just explain concepts—we 
                  show you how to apply them to your financial situation.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <FiTrendingUp className="value-icon" />
                </div>
                <h3 className="value-title">Continuous Learning</h3>
                <p className="value-text">
                  The financial world is always changing. We stay on top of the latest trends, regulations, and 
                  market developments to keep you informed.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <FiUsers className="value-icon" />
                </div>
                <h3 className="value-title">Your Success</h3>
                <p className="value-text">
                  Your financial success is our priority. We're here to support you on your journey to better 
                  credit, smarter spending, and long-term wealth building.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="what-we-do">
            <h2 className="section-title">What We Do</h2>
            <div className="services-list">
              <div className="service-item">
                <div className="service-bullet"></div>
                <div className="service-content">
                  <h3 className="service-item-title">Credit Score Education</h3>
                  <p className="service-item-text">
                    Learn how credit scores work, how to improve them, and how to maintain excellent credit throughout your life.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-bullet"></div>
                <div className="service-content">
                  <h3 className="service-item-title">Credit Card Guidance</h3>
                  <p className="service-item-text">
                    Find the best credit cards for your needs, understand rewards programs, and learn how to use credit cards responsibly.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-bullet"></div>
                <div className="service-content">
                  <h3 className="service-item-title">Debt Management Strategies</h3>
                  <p className="service-item-text">
                    Get proven strategies to pay off debt faster, avoid common pitfalls, and regain control of your finances.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-bullet"></div>
                <div className="service-content">
                  <h3 className="service-item-title">Financial Market Insights</h3>
                  <p className="service-item-text">
                    Stay informed about economic trends, investment opportunities, and how market changes affect your personal finances.
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
              <a href="/subscribe" className="cta-button">
                Subscribe Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
