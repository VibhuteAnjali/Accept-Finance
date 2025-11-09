import React from 'react';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Ways to Beat Distractions While Working from Home',
      excerpt: 'Discover proven strategies to maintain focus and productivity in your home office environment.',
      author: 'Sarah Johnson',
      readTime: '5 min read',
      category: 'Productivity',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Top 10 AI Tools That Boost Workplace Productivity',
      excerpt: 'Explore cutting-edge AI solutions that are transforming how we work and collaborate.',
      author: 'Michael Chen',
      readTime: '8 min read',
      category: 'Technology',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'How to Build Company Culture in a Remote World',
      excerpt: 'Learn effective strategies for fostering connection and engagement in distributed teams.',
      author: 'Emily Rodriguez',
      readTime: '6 min read',
      category: 'Leadership',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Ergonomics 101: Setting Up the Perfect Home Office',
      excerpt: 'Essential tips for creating a comfortable and healthy workspace at home.',
      author: 'David Park',
      readTime: '7 min read',
      category: 'Wellness',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'From Playtime to Programming: Encouraging Early Digital Literacy',
      excerpt: 'Innovative approaches to introduce children to technology and coding fundamentals.',
      author: 'Lisa Thompson',
      readTime: '10 min read',
      category: 'Education',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'The Future of Learning: AI and Technology in Education',
      excerpt: 'How artificial intelligence is revolutionizing educational experiences for children.',
      author: 'James Wilson',
      readTime: '9 min read',
      category: 'Education',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const featuredPost = {
    title: 'Bridging Minds: The Symbiosis Between Human Intelligence and Artificial Intelligence',
    excerpt: 'In the modern era, the line between human cognition and artificial intelligence continues to blur. Explore how human creativity and AI-powered efficiency create the perfect partnership for innovation.',
    author: 'Dr. Alex Martinez',
    readTime: '12 min read',
    category: 'Featured',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <span className="section-tag">From Our Blog</span>
          <h2 className="section-title">
            Latest <span className="gradient-text">Insights & Stories</span>
          </h2>
          <p className="section-description">
            Expert advice, industry trends, and practical tips for the modern workplace
          </p>
        </div>

        <div className="featured-post">
          <div className="featured-content">
            <div className="featured-badge">Featured Article</div>
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
              <div className="visual-emoji">🤝</div>
              <div className="visual-label">Human + AI</div>
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
