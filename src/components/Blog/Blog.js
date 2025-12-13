import React from 'react';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Is America Headed Toward a Buyer’s Market?',
      excerpt: 'Home price trends in major cities, growing inventory, mortgage availability, and whether buyers should act now or wait.',
      author: 'Housing Desk',
      readTime: '7 min read',
      category: 'Real Estate',
      gradient: 'linear-gradient(135deg, #20b2aa 0%, #48d1cc 100%)'
    },
    {
      title: 'S&P 500 Hits New Highs — Is the Rally Sustainable?',
      excerpt: 'An in-depth look at the AI-driven rally, market winners, valuation risks, and analyst predictions for 2025–26.',
      author: 'Market Analysts',
      readTime: '8 min read',
      category: 'Stock Market',
      gradient: 'linear-gradient(135deg, #48d1cc 0%, #40e0d0 100%)'
    },
    {
      title: 'Best High-Yield Savings Accounts & CDs in the U.S. (2025)',
      excerpt: 'Compare current APYs, top banks, online vs traditional options, and smart saving strategies.',
      author: 'Personal Finance Team',
      readTime: '6 min read',
      category: 'Banking',
      gradient: 'linear-gradient(135deg, #20b2aa 0%, #7fffd4 100%)'
    },
    {
      title: 'Investing in America’s Industrial Renaissance',
      excerpt: 'EV manufacturing, chip fabs, robotics, government incentives, and top industrial stocks & ETFs.',
      author: 'Industry Insights',
      readTime: '9 min read',
      category: 'Investing',
      gradient: 'linear-gradient(135deg, #40e0d0 0%, #48d1cc 100%)'
    },
    {
      title: 'Crypto Adoption Surges in the U.S.: Will Bitcoin Become Mainstream by 2026?',
      excerpt: 'U.S. crypto regulations, Bitcoin ETF performance, adoption trends, and best practices for new investors.',
      author: 'Crypto Research',
      readTime: '8 min read',
      category: 'Cryptocurrency',
      gradient: 'linear-gradient(135deg, #48d1cc 0%, #7fffd4 100%)'
    },
    {
      title: 'The Student Loan Crisis Continues: What Borrowers Need to Know in 2025',
      excerpt: 'Federal repayment updates, SAVE plan changes, forgiveness rules, and strategies for managing debt.',
      author: 'Education Finance',
      readTime: '7 min read',
      category: 'Student Loans',
      gradient: 'linear-gradient(135deg, #20b2aa 0%, #40e0d0 100%)'
    },
    {
      title: 'U.S. Inflation Is Cooling — But Why Are Prices Still High?',
      excerpt: 'A breakdown of sticky inflation across housing, groceries, insurance, and healthcare, and what relief may come.',
      author: 'Economic Outlook',
      readTime: '6 min read',
      category: 'Economy',
      gradient: 'linear-gradient(135deg, #7fffd4 0%, #48d1cc 100%)'
    },
    {
      title: 'The Rise of AI Jobs in the U.S.: How It Will Change Income & Careers',
      excerpt: 'Top-paying AI jobs, skills Americans should learn, automation risks, and job security through 2030.',
      author: 'Future of Work',
      readTime: '8 min read',
      category: 'Careers',
      gradient: 'linear-gradient(135deg, #40e0d0 0%, #7fffd4 100%)'
    },
    {
      title: '10 Smart Money Moves Every American Should Make Before 2026',
      excerpt: 'From maximizing retirement accounts to preparing for market volatility, a practical financial checklist.',
      author: 'Money Guide',
      readTime: '10 min read',
      category: 'Personal Finance',
      gradient: 'linear-gradient(135deg, #48d1cc 0%, #20b2aa 100%)'
    }
  ];

  const featuredPost = {
    title: 'How It Will Impact Mortgages, Credit Cards & Savings',
    excerpt: 'Expected Fed rate cuts, mortgage and credit card rate changes, loan trends, and what U.S. consumers should do now.',
    author: 'Federal Policy Watch',
    readTime: '9 min read',
    category: 'Featured',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <span className="section-tag">From Our Blog</span>
          <h2 className="section-title">
            Latest <span className="gradient-text">U.S. Financial Insights</span>
          </h2>
          <p className="section-description">
            Market trends, economic analysis, and smart money strategies for Americans
          </p>
        </div>

        <div className="featured-post">
          <div className="featured-content">
            <div className="featured-badge">Featured Analysis</div>
            <h3 className="featured-title">{featuredPost.title}</h3>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <div className="featured-meta">
              <div className="meta-item">
                <FiUser />
                <span>{featuredPost.author}</span>
              </div>
              <div className="meta-item">
                <FiClock />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
            <button className="read-more-button">
              Read Full Article
              <FiArrowRight />
            </button>
          </div>
          <div className="featured-visual">
            <div className="visual-orb"></div>
            <div className="visual-text">
              <div className="visual-emoji">🇺🇸</div>
              <div className="visual-label">U.S. Economy</div>
            </div>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div
                className="blog-card-header"
                style={{ background: post.gradient }}
              >
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-meta">
                    <div className="meta-item">
                      <FiUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="meta-item">
                      <FiClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="blog-read-more">
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="view-all-button">
            View All Articles
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
