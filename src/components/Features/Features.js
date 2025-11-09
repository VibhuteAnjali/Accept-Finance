import React from 'react';
import { FiTrendingUp, FiUsers, FiBookOpen, FiTool } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FiTrendingUp />,
      title: 'Productivity Resources',
      description: 'Discover expert articles, guides, and tools to help you manage time, stay focused, and build better work habits.',
      color: '#6366f1'
    },
    {
      icon: <FiUsers />,
      title: 'Team Collaboration',
      description: 'Learn how to lead remote teams, improve communication, and use technology to stay connected.',
      color: '#8b5cf6'
    },
    {
      icon: <FiBookOpen />,
      title: 'Professional Development',
      description: 'Access online courses and workshops designed to level up your digital skills, leadership abilities, and work efficiency.',
      color: '#ec4899'
    },
    {
      icon: <FiTool />,
      title: 'Digital Tools',
      description: 'Explore a curated selection of software, templates, and platforms that make online work easier — from task management to AI productivity boosters.',
      color: '#3b82f6'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Thrive Online</span>
          </h2>
          <p className="section-description">
            Comprehensive resources and tools designed for the modern digital workplace
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
              <h3 className="cta-title">Ready to transform your work?</h3>
              <p className="cta-description">
                Join thousands of professionals who are already working smarter with OnlineAtWork
              </p>
            </div>
            <button className="cta-button-large">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
