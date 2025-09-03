import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { projects } from './data/projects';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <Hero id="hero" />
        <section id="about" className="section">
          <div className="container">
            <About />
          </div>
        </section>
        <section id="experience" className="section">
          <div className="container">
            <Experience />
          </div>
        </section>
        <section id="recommendations" className="section">
          <div className="container">
            <Recommendations />
          </div>
        </section>
        <section id="skills" className="section">
          <div className="container">
            <Skills />
          </div>
        </section>
        <section id="projects" className="section">
          <div className="container">
            <Portfolio projects={projects} />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;