import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How It Will Impact Mortgages, Credit Cards & Savings',
      excerpt: 'Expected Fed rate cuts (2025 outlook), impact on mortgage rates (refi boom?), credit card APR changes, auto loan & personal loan trends, and what U.S. consumers should do now.',
      author: 'Federal Policy Watch',
      readTime: '9 min read',
      category: 'Featured',
      gradient: 'linear-gradient(135deg, #20b2aa, #48d1cc)'
    },
    {
      title: 'Is America Headed Toward a Buyer's Market?',
      excerpt: 'Home price trends in major cities, mortgage availability, why inventory is starting to grow, best places where prices may drop, and should you buy or wait?',
      author: 'Housing Desk',
      readTime: '7 min read',
      category: 'Real Estate',
      gradient: 'linear-gradient(135deg, #20b2aa, #40e0d0)'
    },
    {
      title: 'S&P 500 Hits New Highs — Is the Rally Sustainable?',
      excerpt: 'AI-driven market surge, biggest winners (tech, semiconductors, AI infra), signs of overvaluation, safe investment strategies during a market peak, and analyst predictions for 2025–26.',
      author: 'Market Analysts',
      readTime: '8 min read',
      category: 'Stock Market',
      gradient: 'linear-gradient(135deg, #48d1cc, #20b2aa)'
    },
    {
      title: 'Best High-Yield Savings Accounts & CDs in the U.S. (2025)',
      excerpt: 'Current APYs, which banks offer the highest returns, online vs traditional banks, pros/cons of locking money in CDs, and smart saving tips for U.S. consumers.',
      author: 'Personal Finance Team',
      readTime: '6 min read',
      category: 'Banking',
      gradient: 'linear-gradient(135deg, #40e0d0, #48d1cc)'
    },
    {
      title: 'Investing in America's Industrial Renaissance',
      excerpt: 'Rise of EV manufacturing, chip fabs, and robotics. U.S. incentives (CHIPS Act, green energy credits), top industrial stocks & ETFs, long-term outlook, and risks to be aware of.',
      author: 'Industry Insights',
      readTime: '9 min read',
      category: 'Investing',
      gradient: 'linear-gradient(135deg, #20b2aa, #40e0d0)'
    },
    {
      title: 'Crypto Adoption Surges in the U.S.: Will Bitcoin Become Mainstream by 2026?',
      excerpt: 'Updated U.S. crypto regulations, Bitcoin ETF performance, retail vs institutional adoption, predictions for the next bull cycle, and best practices for new crypto investors.',
      author: 'Crypto Research',
      readTime: '8 min read',
      category: 'Cryptocurrency',
      gradient: 'linear-gradient(135deg, #48d1cc, #20b2aa)'
    },
    {
      title: 'The Student Loan Crisis Continues: What Borrowers Need to Know in 2025',
      excerpt: 'Latest changes to federal repayment programs, SAVE plan updates, forgiveness rules, how interest will grow in 2025, and financial strategies for borrowers.',
      author: 'Education Finance',
      readTime: '7 min read',
      category: 'Student Loans',
      gradient: 'linear-gradient(135deg, #40e0d0, #48d1cc)'
    },
    {
      title: 'U.S. Inflation Is Cooling — But Why Are Prices Still High?',
      excerpt: 'Breakdown of "sticky inflation" across housing, groceries, insurance, and healthcare. How corporate pricing affects consumers, relief expected in late 2025, and how Americans can manage rising costs.',
      author: 'Economic Outlook',
      readTime: '6 min read',
      category: 'Economy',
      gradient: 'linear-gradient(135deg, #20b2aa, #48d1cc)'
    },
    {
      title: 'The Rise of AI Jobs in the U.S.: How It Will Change Income & Careers',
      excerpt: 'Top-paying AI-related jobs, how automation is affecting the middle class, skills Americans should learn, best states for tech growth, and job security outlook for 2025–2030.',
      author: 'Future of Work',
      readTime: '8 min read',
      category: 'Careers',
      gradient: 'linear-gradient(135deg, #48d1cc, #40e0d0)'
    },
    {
      title: '10 Smart Money Moves Every American Should Make Before 2026',
      excerpt: 'Max out 401(k)/IRA limits, pay off high-interest credit card debt, build a 6–12 month emergency fund, invest in low-cost index funds, use tax credits & deductions, and prepare for market volatility.',
      author: 'Money Guide',
      readTime: '10 min read',
      category: 'Personal Finance',
      gradient: 'linear-gradient(135deg, #20b2aa, #40e0d0)'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="blog-hero-bg"></div>
        <div className="blog-container">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">Financial Articles & Insights</h1>
            <p className="blog-hero-subtitle">
              Market trends, economic analysis, and smart money strategies for Americans
            </p>
          </div>
        </div>
      </div>

      <section className="blog-content">
        <div className="blog-container">
          {/* Featured Post */}
          <div className="featured-post">
            <div className="featured-content">
              <div className="featured-badge">Featured Analysis</div>
              <h2 className="featured-title">{featuredPost.title}</h2>
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
                <div className="visual-emoji">📊</div>
                <div className="visual-label">U.S. Economy</div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {regularPosts.map((post, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default Blog;

