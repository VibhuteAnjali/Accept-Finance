import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiLock, FiEye, FiMail, FiDatabase } from 'react-icons/fi';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const privacyData = [
    {
      icon: <FiDatabase />,
      question: "1. Information We Collect",
      answers: [
        "Personal Information You Provide: We may collect personal information when you voluntarily submit it through forms or interactions on our website, including name, email address, phone number (if submitted), message content (via contact forms), and newsletter opt-in details.",
        "Automatically Collected Information: When you visit the Site, we automatically collect certain information, including IP address, browser type and version, device type, operating system, referring pages, pages visited and time spent, and cookies and tracking technologies.",
        "Financial Information Disclaimer: We do not collect sensitive financial information such as credit card numbers, bank account details, Social Security numbers, or credit reports."
      ]
    },
    {
      icon: <FiEye />,
      question: "2. How We Use Your Information",
      answers: [
        "Provide and improve our content and services",
        "Personalize user experience",
        "Respond to inquiries or customer support requests",
        "Send newsletters, updates, or promotional emails (only if you opt in)",
        "Analyze website performance and user interactions",
        "Maintain security and prevent fraudulent activity",
        "Comply with legal obligations"
      ]
    },
    {
      icon: <FiDatabase />,
      question: "3. Cookies and Tracking Technologies",
      answers: [
        "We use cookies, web beacons, analytics tools (e.g., Google Analytics), and similar technologies to improve functionality, enhance user experience, track website performance, and display relevant content.",
        "You can disable cookies through your browser settings; however, doing so may affect site functionality."
      ]
    },
    {
      icon: <FiShield />,
      question: "4. How We Share Your Information",
      answers: [
        "We do NOT sell personal information.",
        "Service Providers: Third-party vendors who help operate the Site (analytics, email services, hosting providers).",
        "Legal Compliance: We may disclose information if required by law, regulation, subpoenas, or government requests.",
        "Business Transfers: In the event of a merger, acquisition, or asset sale, user information may be part of the transferred assets."
      ]
    },
    {
      icon: <FiEye />,
      question: "5. Third-Party Links",
      answers: [
        "Our Site may include links to third-party websites, tools, or financial services.",
        "We are not responsible for the privacy practices or content of those websites.",
        "We recommend reviewing their respective privacy policies."
      ]
    },
    {
      icon: <FiLock />,
      question: "6. Data Security",
      answers: [
        "We implement appropriate technical and organizational measures to protect your data.",
        "However, no internet transmission is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      icon: <FiShield />,
      question: "7. Children's Privacy",
      answers: [
        "The Site is not intended for children under 13, and we do not knowingly collect information from minors.",
        "If you believe a child has submitted information, contact us, and we will take immediate action."
      ]
    },
    {
      icon: <FiEye />,
      question: "8. Your Rights (U.S. Residents)",
      answers: [
        "Depending on your state, you may have privacy rights such as: Right to know what data is collected, Right to request deletion, Right to opt-out of data sharing, Right to correct inaccurate information.",
        "Applicable state laws may include CCPA (California), CPA (Colorado), VCDPA (Virginia), etc.",
        "To exercise your rights, contact us at: email@financialupdates.com"
      ]
    },
    {
      icon: <FiMail />,
      question: "9. Email Communications and Opt-Out",
      answers: [
        "If you have subscribed to our newsletter or marketing emails, you may opt-out at any time by clicking the 'Unsubscribe' link in any email or contacting us directly."
      ]
    },
    {
      icon: <FiDatabase />,
      question: "10. Data Retention",
      answers: [
        "We retain personal information only as long as necessary to provide services, comply with legal requirements, resolve disputes, and enforce agreements."
      ]
    },
    {
      icon: <FiEye />,
      question: "11. Changes to This Privacy Policy",
      answers: [
        "We may update this Privacy Policy periodically.",
        "Changes will be posted on this page with an updated 'Last Updated' date."
      ]
    },
    {
      icon: <FiMail />,
      question: "12. Contact Us",
      answers: [
        "If you have any questions, feedback, or privacy requests, please contact us:",
        "Email: email@financialupdates.com"
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="privacy-hero-bg"></div>
        <div className="privacy-container">
          <Link to="/" className="back-link">
            <FiArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="privacy-hero-content">
            <div className="privacy-icon-wrapper">
              <div className="privacy-icon-bg"></div>
              <FiShield className="privacy-icon" />
            </div>
            <h1 className="privacy-hero-title">Privacy Policy</h1>
            <p className="privacy-hero-subtitle">
              Welcome to Financial Updates. We value your privacy and are committed to protecting your personal information.
            </p>
            <div className="privacy-date">
              <span className="date-label">Last Updated:</span>
              <span className="date-value">January 2025</span>
            </div>
          </div>
        </div>
      </div>

      <section className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-intro">
            <div className="intro-card">
              <p>
                Welcome to <strong className="brand-name">Financial Updates</strong> ("Company," "we," "us," or "our"). 
                We value your privacy and are committed to protecting your personal information. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                ("Site").
              </p>
              <p>
                By accessing or using our Site, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="privacy-sections">
            {privacyData.map((section, index) => (
              <div key={index} className="privacy-section">
                <div className="section-header">
                  <div className="section-icon">
                    {section.icon}
                  </div>
                  <h2 className="privacy-section-title">{section.question}</h2>
                </div>
                <ul className="privacy-list">
                  {section.answers.map((answer, answerIndex) => (
                    <li key={answerIndex} className="privacy-list-item">
                      <span className="list-bullet"></span>
                      <span className="list-text">{answer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="privacy-footer-note">
            <div className="footer-note-icon">
              <FiShield />
            </div>
            <h3>Your Privacy Matters</h3>
            <p>
              We are committed to protecting your privacy and will continue to update our practices to ensure 
              the highest level of data protection. If you have any concerns or questions, please don't hesitate 
              to contact us.
            </p>
          </div>

          <div className="privacy-cta">
            <button className="scroll-top-button" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
