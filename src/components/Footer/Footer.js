import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiPhone
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const handleRouteClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about', isRoute: false },
      { name: 'Blog', href: '#blog', isRoute: false },
      { name: 'Contact Us', href: '#contact', isRoute: false }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { name: 'Terms of Service', href: '/terms-of-service', isRoute: true }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">💰</span>
              <span className="footer-logo-text">Financial Updates</span>
            </div>
            <p className="footer-tagline">
              Clear, reliable, and up-to-date financial insights to help you make smarter money decisions.
            </p>

            {/* Social Links */}
            <div className="footer-social">
              <a href="https://facebook.com/financialupdates" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link-icon">
                <FiFacebook size={24} color="#ffffff" />
              </a>
              <a href="https://instagram.com/financialupdates" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link-icon">
                <FiInstagram size={24} color="#ffffff" />
              </a>
              <a href="https://twitter.com/FinUpdates" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link-icon">
                <FiTwitter size={24} color="#ffffff" />
              </a>
              <a href="https://linkedin.com/company/financialupdates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link-icon">
                <FiLinkedin size={24} color="#ffffff" />
              </a>
              <a href="https://threads.net/financialupdates" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="social-link-icon">
                <FiTwitter size={24} color="#ffffff" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            {/* Company Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.isRoute ? (
                      <Link to={link.href} className="footer-link" onClick={handleRouteClick}>
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer-link">{link.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    {link.isRoute ? (
                      <Link to={link.href} className="footer-link" onClick={handleRouteClick}>
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer-link">{link.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer-column">
              <h4 className="footer-column-title">Get in Touch</h4>
              <ul className="footer-list">
                <li className="footer-contact-item">
                  <FiPhone className="contact-icon" size={20} />
                  <a href="tel:+14027868780" className="footer-link">+1 (402) 786-8780</a>
                </li>
                <li className="footer-contact-item">
                  <FiMail className="contact-icon" size={20} />
                  <a href="mailto:email@financialupdates.com" className="footer-link">email@financialupdates.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest financial tips, credit guidance, investing trends, and money-saving strategies delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <div className="input-wrapper">
                <FiMail className="input-icon" size={20} />
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
              </div>
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 FinancialUpdates.com — All rights reserved.
            </p>
            <p className="footer-made-with">
              Built to help Americans make smarter money decisions
            </p>
          </div>
        </div>
      </div>

      {/* Gradient for styling */}
      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;
