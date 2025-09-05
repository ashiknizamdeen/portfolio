import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import './Portfolio.css';

const Portfolio = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const getProjectCategory = (tech) => {
    if (tech.includes('Shopify') || tech.includes('WooCommerce')) return 'E-commerce';
    if (tech.includes('AI') || tech.includes('Machine Learning') || tech.includes('TensorFlow')) return 'AI/ML';
    if (tech.includes('WordPress') && tech.length <= 3) return 'Landing Pages';
    return 'Web Development';
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <motion.div
          className="portfolio-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A curated selection of my most impactful projects, showcasing expertise across different technologies and industries
            </p>
          </motion.div>

          <motion.div className="projects-grid" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-modern"
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="project-image-container">
                  <div className="project-image-placeholder">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`${project.name} project preview`}
                        className="project-image"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        onLoad={(e) => {
                          e.target.style.opacity = '1';
                        }}
                        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                      />
                    ) : null}
                    <div className="project-category-badge">
                      {getProjectCategory(project.tech)}
                    </div>
                  </div>
                </div>

                <div className="project-content-modern">
                  <div className="project-meta">
                    <h3 className="project-name-modern">{project.name}</h3>
                    <p className="project-description-modern">
                      {project.description.split('.')[0]}.
                    </p>
                  </div>

                  <div className="project-footer">
                    <div className="project-tech-modern">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-modern">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-more-modern">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                  
                  <motion.button 
                    className="project-link-btn"
                    onClick={() => window.open(project.url, '_blank')}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;