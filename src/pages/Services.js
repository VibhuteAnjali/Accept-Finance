import React from 'react';
import { FiTrendingUp, FiCreditCard, FiDollarSign, FiCheckCircle } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="services-container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Services & Financial Guidance</h1>
            <p className="services-hero-subtitle">
              Get expert-backed advice on improving your credit score, choosing the right credit cards, 
              and managing debt responsibly. Financial Updates gives you simple, reliable tips to build 
              a stronger financial future.
            </p>
          </div>
        </div>
      </div>

      <section className="services-content">
        <div className="services-container">
          {/* Credit Score Tips */}
          <div className="service-section">
            <div className="service-icon-wrapper">
              <FiTrendingUp className="service-icon" />
            </div>
            <h2 className="service-title">1. Credit Score Tips & Guidance</h2>
            <p className="service-intro">
              Your credit score is one of the most important numbers in your financial life. It affects 
              everything—from loan approvals and interest rates to apartment rentals, insurance premiums, 
              and even job opportunities.
            </p>
            <div className="service-content-box">
              <h3 className="content-box-title">What We Help You Understand</h3>
              <ul className="service-list">
                <li>How credit scores are calculated (FICO vs. VantageScore)</li>
                <li>Steps to increase your score quickly and safely</li>
                <li>How long late payments, collections, or inquiries stay on your report</li>
                <li>Strategies to maintain excellent credit for life</li>
                <li>Use a secured credit card if you're rebuilding</li>
              </ul>
              <div className="service-quote">
                "Good credit isn't built in a day—it's built with consistency."
              </div>
            </div>
          </div>

          {/* Credit Card Tips */}
          <div className="service-section">
            <div className="service-icon-wrapper">
              <FiCreditCard className="service-icon" />
            </div>
            <h2 className="service-title">2. Credit Card Tips & Smart Usage</h2>
            <p className="service-intro">
              Credit cards are powerful financial tools—when used wisely. They can help you build credit, 
              earn rewards, and manage expenses. But mismanagement can lead to high-interest debt.
            </p>
            <div className="service-content-box">
              <h3 className="content-box-title">What We Cover</h3>
              <ul className="service-list">
                <li>Best credit cards for beginners</li>
                <li>Best credit cards for rewards & cashback</li>
                <li>Top balance transfer cards for lowering interest</li>
                <li>How to choose cards with the right benefits</li>
                <li>How to avoid annual fees and hidden charges</li>
              </ul>
              <div className="service-quote">
                "Use your credit card like a tool, not a source of debt."
              </div>
            </div>
          </div>

          {/* Debt Management */}
          <div className="service-section">
            <div className="service-icon-wrapper">
              <FiDollarSign className="service-icon" />
            </div>
            <h2 className="service-title">3. Debt Management Strategies</h2>
            <p className="service-intro">
              Debt can feel overwhelming, but with the right plan, you can regain control of your finances. 
              We simplify complex strategies so you can take clear, confident action.
            </p>
            <div className="service-content-box">
              <h3 className="content-box-title">Effective Debt-Reduction Tips</h3>
              <ul className="service-list">
                <li>Always target the highest-interest debt first</li>
                <li>Avoid minimum payments—they keep you in debt longer</li>
                <li>Lower interest rates by improving your credit score</li>
                <li>Stick to a simple monthly budget</li>
                <li>Avoid taking on new debt while paying down old debt</li>
              </ul>
              <div className="service-quote">
                "The first step to financial freedom is taking control of your debt."
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <div className="cta-card">
              <FiCheckCircle className="cta-icon" />
              <h3 className="cta-title">Build a Stronger Financial Future</h3>
              <p className="cta-description">
                Improve your credit score, choose the best credit cards, and protect your financial future 
                with expert-backed tips. From credit-building strategies to smart card recommendations, 
                Financial Updates gives you the guidance you need to take control of your money.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

