import React, { useState } from 'react';
import { ExternalLink, Github, Mail, MapPin, Code, Palette, Zap } from 'lucide-react';
import './App.css';

const App = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const websites = [
    {
      id: 1,
      name: "VoiceStream",
      url: "https://podcast-web-app-woad.vercel.app/",
      description: "A modern podcast website built with Next.js 13, TypeScript, and Sanity CMS. This project features a responsive design, seamless content management, and optimized audio playback experience.",
      tech: ["NextJs", "TypeScript", "Sanity CMS"],
      category: "Business"
    },
    {
      id: 2,
      name: "ThreadForce",
      url: "https://threadforce.netlify.app/",
      description: "ThreadForce is an e-commerce website designed to help customers find and purchase high-quality footwear for various occasions.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "E-commerce"
    },
    {
      id: 3,
      name: "Winsoft",
      url: "https://www.winsoft.lk/",
      description: "Professional software development company showcasing innovative solutions",
      tech: ["React", "Express", "PostgreSQL"],
      category: "Technology"
    },
    {
      id: 4,
      name: "Life Mobile",
      url: "https://lifemobile.lk/",
      description: "Mobile services platform with user-friendly interface and seamless experience",
      tech: ["React", "Firebase", "Tailwind"],
      category: "Mobile"
    },
    {
      id: 5,
      name: "Fadna",
      url: "https://fadna.com/",
      description: "Creative digital agency website with stunning visuals and smooth animations",
      tech: ["React", "Framer Motion", "Styled Components"],
      category: "Creative"
    },
    {
      id: 6,
      name: "AZ Teas",
      url: "https://az-teas.com/",
      description: "Premium tea brand e-commerce platform with elegant product showcasing",
      tech: ["React", "Shopify", "Stripe"],
      category: "E-commerce"
    },
    {
      id: 7,
      name: "FADV",
      url: "https://fadv.com/",
      description: "Digital marketing agency with modern design and performance optimization",
      tech: ["React", "Next.js", "Vercel"],
      category: "Marketing"
    },
    {
      id: 8,
      name: "Blue Hearth",
      url: "https://bluehearth.com/",
      description: "Healthcare platform with intuitive design and secure patient management",
      tech: ["React", "Node.js", "MySQL"],
      category: "Healthcare"
    },
    {
      id: 9,
      name: "Boldin",
      url: "https://www.boldin.com/",
      description: "Financial services platform with advanced security and user experience",
      tech: ["React", "Express", "Redis"],
      category: "Finance"
    },
    {
      id: 10,
      name: "Teksek",
      url: "https://teksek.lk/",
      description: "Technology consulting firm with comprehensive service offerings",
      tech: ["React", "GraphQL", "AWS"],
      category: "Consulting"
    }
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Palette, label: "Design Systems", value: "20+" },
    { icon: Zap, label: "Years Experience", value: "1.5+" }
  ];

  return (
    <div className="app">
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
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">NextJs</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">Flutter</span>
                  <span className="tech-badge">Dart</span>
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of websites I've developed with passion and precision
          </p>
        </div>

        <div className="portfolio-grid">
          {websites.map((website) => (
            <div
              key={website.id}
              className={`portfolio-card ${hoveredCard === website.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(website.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-header">
                <div className="card-category">{website.category}</div>
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="card-body">
                <h3 className="card-title">{website.name}</h3>
                <p className="card-description">{website.description}</p>
                
                <div className="tech-stack">
                  {website.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Let's Build Something Amazing</h2>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={20} />
              <span>Kandy, Sri Lanka</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <span>ashikshaheed4@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Ashik's Portfolio. Built using React and NodeJs</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;