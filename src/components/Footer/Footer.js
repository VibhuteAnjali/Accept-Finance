import React from 'react';
import { FiMail, FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'For Teams', href: '#teams' },
      { name: 'Resources', href: '#resources' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Unsubscribe', href: '#unsubscribe' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>⚡</span>
              </div>
              <span className="footer-logo-text">OnlineAtWork</span>
            </div>
            <p className="footer-tagline">
              Empowering professionals to stay productive, connected, and inspired — wherever work happens.
            </p>
            <div className="footer-social">
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#github" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="#youtube" className="social-link" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Product</h4>
              <ul className="footer-list">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Support</h4>
              <ul className="footer-list">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest insights and resources delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
              </div>
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 OnlineAtWork.com — All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <span className="heart">❤️</span> for the future of work
            </p>
          </div>
        </div>
      </div>

      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;
