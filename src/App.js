import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import ForTeams from './components/ForTeams/ForTeams';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <ForTeams />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
