import React from 'react';
import { FiCheckCircle, FiUsers, FiAward, FiFileText, FiTarget } from 'react-icons/fi';
import './ForTeams.css';

const ForTeams = () => {
  const offerings = [
    {
      icon: <FiUsers />,
      title: 'Remote Team Onboarding Guides',
      description: 'Comprehensive frameworks to seamlessly integrate new team members into your remote workforce'
    },
    {
      icon: <FiAward />,
      title: 'Virtual Leadership Training',
      description: 'Develop essential skills to lead and inspire distributed teams effectively'
    },
    {
      icon: <FiFileText />,
      title: 'Communication Templates',
      description: 'Ready-to-use templates for meetings, updates, and team collaboration'
    },
    {
      icon: <FiTarget />,
      title: 'Custom Workshops',
      description: 'Tailored training programs designed specifically for hybrid companies'
    }
  ];

  return (
    <section className="for-teams" id="teams">
      <div className="for-teams-container">
        <div className="for-teams-content">
          <div className="for-teams-text">
            <span className="section-tag">For Teams & Businesses</span>
            <h2 className="section-title">
              Empower Your Team with <span className="gradient-text">Modern Solutions</span>
            </h2>
            <p className="section-description">
              Resources and frameworks built for the modern workplace. Transform your team's 
              productivity with tools designed for remote and hybrid environments.
            </p>

            <div className="offerings-list">
              {offerings.map((offering, index) => (
                <div key={index} className="offering-item">
                  <div className="offering-icon">
                    {offering.icon}
                  </div>
                  <div className="offering-content">
                    <h4 className="offering-title">{offering.title}</h4>
                    <p className="offering-description">{offering.description}</p>
                  </div>
                  <FiCheckCircle className="check-icon" />
                </div>
              ))}
            </div>

            <div className="for-teams-quote">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                We don't just work online — we help you work better online.
              </p>
            </div>

            <button className="teams-cta-button">
              Schedule a Demo
            </button>
          </div>

          <div className="for-teams-visual">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-value">3x</div>
                <div className="stat-label">Productivity Increase</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-value">85%</div>
                <div className="stat-label">Time Saved</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-value">95%</div>
                <div className="stat-label">Goal Achievement</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🌟</div>
                <div className="stat-value">500+</div>
                <div className="stat-label">Companies Trust Us</div>
              </div>
            </div>

            <div className="team-illustration">
              <div className="team-circle circle-1">
                <span>👥</span>
              </div>
              <div className="team-circle circle-2">
                <span>💼</span>
              </div>
              <div className="team-circle circle-3">
                <span>🚀</span>
              </div>
              <div className="team-circle circle-4">
                <span>⚙️</span>
              </div>
              <div className="center-circle">
                <span>🏢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
