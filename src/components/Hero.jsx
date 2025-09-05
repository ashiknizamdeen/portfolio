import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const scrollItems = [
    "UI DESIGN",
    "PROTOTYPING",
    "WIREFRAME", 
    "FRONTEND",
    "BACKEND",
    "MOBILE DEVELOPMENT",
    "USER EXPERIENCE",
    "VISUAL DESIGN"
  ];

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-layout">
          <motion.div className="hero-image-container" variants={imageVariants}>
            <div className="profile-image-wrapper">
              <img 
                src="/proPic.jpg"
                alt="Ashik Nizamdeen"
                className="profile-image"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </motion.div>

          <div className="hero-text">
            <motion.h1 className="hero-name" variants={itemVariants}>
              Hi, I'm Ashik
            </motion.h1>
            
            <motion.h2 className="hero-title" variants={itemVariants}>
              Full-Stack Developer
            </motion.h2>
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Passionate about creating innovative digital solutions with modern technologies. 
              I specialize in building responsive web applications and mobile solutions that 
              deliver exceptional user experiences.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="/resume.pdf"
                download="Ashik_Nizamdeen_Resume.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="infinite-scroll"
          variants={itemVariants}
        >
          <div className="scroll-container">
            <div className="scroll-content">
              {[...scrollItems, ...scrollItems, ...scrollItems].map((item, index) => (
                <React.Fragment key={index}>
                  <span className="scroll-item">{item}</span>
                  <span className="scroll-separator">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
