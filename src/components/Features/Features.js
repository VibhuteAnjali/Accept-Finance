import React from 'react';
import { FiTrendingUp, FiUsers, FiBookOpen, FiTool } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FiTrendingUp />,
      title: 'Credit Score Tips & Guidance',
      description:
        'Understand how credit scores work (FICO vs VantageScore), how to boost your score safely, how long negative marks last, and how to build excellent credit with consistency.',
      color: '#20b2aa'
    },
    {
      icon: <FiUsers />,
      title: 'Credit Card Tips & Smart Usage',
      description:
        'Find the best credit cards for beginners, rewards and cashback cards, balance transfer options, and learn how to avoid high interest, fees, and hidden charges.',
      color: '#48d1cc'
    },
    {
      icon: <FiBookOpen />,
      title: 'Debt Management Strategies',
      description:
        'Simple, proven strategies to pay off high-interest debt faster, avoid minimum payment traps, improve your credit, and regain financial control.',
      color: '#40e0d0'
    },
    {
      icon: <FiTool />,
      title: 'Loans, Credit & Mortgage Education',
      description:
        'Learn how your credit affects loan and mortgage approvals, how to qualify for better interest rates, and how to make smarter borrowing decisions.',
      color: '#20b2aa'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">
            Take Control of Your <span className="gradient-text">Financial Future</span>
          </h2>
          <p className="section-description">
            Expert-backed guidance to improve your credit score, manage debt, and make smarter financial decisions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-card-inner">
                <div className="feature-icon-container">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon-main">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
                <div className="feature-card-footer">
                  <span className="learn-more">
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3 className="cta-title">Build a Stronger Financial Future</h3>
              <p className="cta-description">
                Improve your credit score, choose the right credit cards, and manage debt responsibly with clear,
                trustworthy financial guidance.
              </p>
            </div>
            <button className="cta-button-large">
              Explore Financial Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
