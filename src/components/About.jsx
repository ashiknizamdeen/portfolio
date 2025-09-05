import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Coffee, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designing with empathy, creating experiences that truly matter to users."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and industry best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Finding creative solutions to complex problems through technology."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">ABOUT ME</h2>
            <p className="section-subtitle">
              Get to know me better
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <p>
                  Hello! I'm Ashik, a passionate full-stack developer based in Sri Lanka. 
                  My journey in software development started with a curiosity about how things work 
                  behind the scenes, and it has evolved into a deep passion for creating digital 
                  solutions that make a difference.
                </p>
                <p>
                  With over 1.5 years of experience in the field, I've had the opportunity to work 
                  on diverse projects ranging from e-commerce platforms to business management systems. 
                  I specialize in modern web technologies including React, Node.js, and Flutter, 
                  always staying current with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in the power of collaboration and continuous learning to drive innovation.
                </p>
              </div>
            </motion.div>

            <motion.div className="about-highlights" variants={itemVariants}>
              <div className="highlight-list">
                <div className="highlight-item">
                  <div className="highlight-number">10+</div>
                  <div className="highlight-label">Projects Completed</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">1.5+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-label">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="values-section" variants={itemVariants}>
            <h3 className="values-title">What I Value</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  data-cursor="hover"
                >
                  <div className="value-icon">
                    <value.icon size={24} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;