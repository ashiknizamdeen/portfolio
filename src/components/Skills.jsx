import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Modern UI/UX frameworks and libraries',
      technologies: [
        { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
        { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
        { name: 'Angular', logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
        { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
        { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
        { name: 'HTML5', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS3', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'Sass', logo: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
        { name: 'Material-UI', logo: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development', 
      icon: '⚙️',
      description: 'Server-side technologies and databases',
      technologies: [
        { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { name: 'Express', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
        { name: 'NestJS', logo: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg' },
        { name: 'PHP', logo: 'https://cdn.worldvectorlogo.com/logos/php-6.svg' },
        { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
        { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
        { name: 'MySQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql-4.svg' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: '☁️', 
      description: 'Cloud platforms and deployment tools',
      technologies: [
        { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg' },
        { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
        { name: 'Jenkins', logo: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
        { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-bash.svg' },
        { name: 'GitHub', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
        { name: 'Linux', logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg' },
        { name: 'PowerShell', logo: 'https://cdn.worldvectorlogo.com/logos/powershell.svg' },
        { name: 'npm', logo: 'https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg' }
      ]
    },
    {
      id: 'design',
      title: 'Design & Testing',
      icon: '🎯',
      description: 'Design tools and testing frameworks', 
      technologies: [
        { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg' },
        { name: 'Redux', logo: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
        { name: 'Selenium', logo: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg' },
        { name: 'Cypress', logo: 'https://cdn.worldvectorlogo.com/logos/cypress-1.svg' },
        { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg' },
        { name: 'Flutter', logo: 'https://cdn.worldvectorlogo.com/logos/flutter.svg' }
      ]
    }
  ];

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">Full-stack development with modern technologies</p>
            <motion.div className="interaction-hint" variants={itemVariants}>
              <span className="hint-text">Click on any card to explore my skills</span>
              <div className="hint-animation">
                <div className="pulse-dot"></div>
                <div className="pulse-ring"></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="categories-grid" variants={containerVariants}>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="category-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.01,
                  y: -3,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(category)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedCategory.title}</h3>
                <button className="close-button" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="tech-grid">
                  {selectedCategory.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;