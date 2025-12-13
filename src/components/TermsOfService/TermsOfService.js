import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiMail,
  FiLock
} from 'react-icons/fi';
import './TermsOfService.css';

const TermsOfService = () => {
  const termsData = [
    {
      icon: <FiCheckCircle />,
      title: '1. Use of Our Website',
      content: [
        'You agree to use this website only for lawful purposes and in accordance with these Terms.',
        'You must not violate any U.S. federal, state, or local laws.',
        'You must not attempt to disrupt, damage, or interfere with the website’s functionality.',
        'You may not use automated tools such as bots or scrapers without written permission.',
        'You may not copy, sell, scrape, or misuse any content published on this site.'
      ]
    },
    {
      icon: <FiAlertCircle />,
      title: '2. Informational Purposes Only (Not Financial Advice)',
      content: [
        'All content on Financial Updates is provided for general informational and educational purposes only.',
        'We do not provide financial, legal, tax, or investment advice.',
        'We do not offer credit repair, debt settlement, or personalized financial recommendations.',
        'You should consult a licensed financial advisor, CPA, or attorney before making financial decisions.'
      ]
    },
    {
      icon: <FiCheckCircle />,
      title: '3. User Responsibilities',
      content: [
        'Any decisions you make based on our content are your sole responsibility.',
        'You agree not to rely exclusively on our content for major financial actions.',
        'You accept all risks associated with using financial information online.'
      ]
    },
    {
      icon: <FiAlertCircle />,
      title: '4. Accuracy of Information',
      content: [
        'We strive to provide accurate and up-to-date information.',
        'We do not guarantee accuracy, completeness, or timeliness of any content.',
        'Financial products, interest rates, and credit card offers change frequently.',
        'We are not responsible for outdated, incorrect, or incomplete information.'
      ]
    },
    {
      icon: <FiFileText />,
      title: '5. External Links & Third-Party Content',
      content: [
        'Our website may contain links to third-party websites or financial services.',
        'We do not control or endorse third-party websites unless explicitly stated.',
        'We do not guarantee the accuracy of external content.',
        'You access third-party links at your own risk and should review their terms and privacy policies.'
      ]
    },
    {
      icon: <FiCheckCircle />,
      title: '6. Affiliate Disclosure',
      content: [
        'Financial Updates may participate in affiliate marketing programs.',
        'We may earn a commission when you click a link or apply for a financial product.',
        'These commissions do not affect the price you pay.',
        'Recommendations are based on research but may be influenced by partnerships.',
        'Sponsored or affiliate content is disclosed when applicable.'
      ]
    },
    {
      icon: <FiFileText />,
      title: '7. Intellectual Property Rights',
      content: [
        'All website content including text, graphics, images, logos, videos, and design is the property of Financial Updates unless otherwise stated.',
        'You may not copy, reproduce, or redistribute our content without written permission.',
        'You may not use our brand name or logo without express consent.'
      ]
    },
    {
      icon: <FiLock />,
      title: '8. User-Generated Content (If Applicable)',
      content: [
        'If you submit comments, feedback, or other content, you grant us a non-exclusive license to use it.',
        'You confirm you own the rights to any content you submit.',
        'You must not post illegal, harmful, or defamatory material.',
        'We reserve the right to remove user-generated content at our discretion.'
      ]
    },
    {
      icon: <FiAlertCircle />,
      title: '9. Limitation of Liability',
      content: [
        'To the fullest extent permitted under U.S. law, Financial Updates is not liable for financial losses or damages.',
        'We are not responsible for decisions made based on our content.',
        'We are not liable for technical issues, downtime, or data breaches.',
        'Your use of this website is entirely at your own risk.'
      ]
    },
    {
      icon: <FiLock />,
      title: '10. Privacy',
      content: [
        'Your use of this website is also governed by our Privacy Policy.',
        'We encourage you to review our Privacy Policy to understand how your information is handled.'
      ]
    },
    {
      icon: <FiFileText />,
      title: '11. Changes to Our Terms',
      content: [
        'We may update these Terms of Service from time to time.',
        'When changes occur, the “Last Updated” date will be modified.',
        'Continued use of the website means acceptance of the revised Terms.'
      ]
    },
    {
      icon: <FiMail />,
      title: '12. Contact Information',
      content: [
        'If you have questions about these Terms of Service, please contact us:',
        'Email: email@financialupdates.com'
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="terms-page">
      <div className="terms-hero">
        <div className="terms-hero-bg"></div>
        <div className="terms-container">
          <Link to="/" className="back-link">
            <FiArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="terms-hero-content">
            <div className="terms-icon-wrapper">
              <div className="terms-icon-bg"></div>
              <FiFileText className="terms-icon" />
            </div>
            <h1 className="terms-hero-title">Terms of Service</h1>
            <p className="terms-hero-subtitle">
              Please read these Terms carefully before using Financial Updates.
            </p>
            <div className="terms-date">
              <span className="date-label">Last Updated:</span>
              <span className="date-value">November 9, 2025</span>
            </div>
          </div>
        </div>
      </div>

      <section className="terms-content">
        <div className="terms-container">
          <div className="terms-sections">
            {termsData.map((section, index) => (
              <div key={index} className="terms-section">
                <div className="section-header">
                  <div className="section-icon">{section.icon}</div>
                  <h2 className="terms-section-title">{section.title}</h2>
                </div>
                <ul className="terms-list">
                  {section.content.map((item, i) => (
                    <li key={i} className="terms-list-item">
                      <span className="list-bullet"></span>
                      <span className="list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="terms-cta">
            <button className="scroll-top-button" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
