import React, { useState } from 'react';
import { FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              At Financial Updates, we're committed to helping you make smarter money decisions with 
              clear, reliable, and up-to-date financial information.
            </p>
            <p className="contact-hero-text">
              If you have questions, feedback, partnership ideas, or need support — we're here to help.
            </p>
          </div>
        </div>
      </div>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="section-header">
                <FiMail className="section-icon" />
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-description">
                  Send us a message and our team will respond as soon as possible.
                </p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <FiSend className="button-icon" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="contact-info-section">
              <div className="info-card">
                <FiMail className="info-icon" />
                <h3 className="info-title">Email</h3>
                <a href="mailto:email@financialupdates.com" className="info-link">
                  email@financialupdates.com
                </a>
              </div>

              <div className="info-card">
                <FiMapPin className="info-icon" />
                <h3 className="info-title">Follow Us</h3>
                <p className="info-description">
                  Stay updated with the latest financial tips, credit guidance, investing trends, 
                  and money-saving strategies.
                </p>
                <div className="social-links">
                  <a
                    href="https://facebook.com/financialupdates"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FiFacebook />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/financialupdates"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FiInstagram />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://threads.net/financialupdates"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads"
                  >
                    <FiTwitter />
                    <span>Threads</span>
                  </a>
                  <a
                    href="https://twitter.com/FinUpdates"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                  >
                    <FiTwitter />
                    <span>Twitter/X</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/financialupdates"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

