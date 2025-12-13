import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Blog from '../components/Blog/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Blog />
    </>
  );
};

export default Home;
