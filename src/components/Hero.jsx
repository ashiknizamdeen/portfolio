import React from 'react';
import { Mail, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const techStack = [
    "JavaScript", "React", "Node.js", "TypeScript", "NextJs", 
    "MongoDB", "MySQL", "Flutter", "Dart", "Java", "Python"
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-intro">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">Ashik Nizamdeen.</h1>
          </div>
          <h2 className="hero-title">
            Building Digital
            <span className="gradient-text"> Experiences</span>
          </h2>
          <p className="hero-subtitle">
            Full-stack developer crafting modern, responsive websites with cutting-edge technologies
          </p>
          <div className="hero-buttons">
            <a href="mailto:ashikshaheed4@gmail.com">
              <button className="btn btn-primary">
                <Mail size={20} />
                Get In Touch
              </button>
            </a>
            <a href="https://github.com/ashiknizamdeen" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">
                <Github size={20} />
                View Github Profile
              </button>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <div className="tech-stack">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;