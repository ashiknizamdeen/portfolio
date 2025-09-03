import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header with Category and External Link Icon */}
      <div className="card-header">
        <div className="category-tag">
          {project.category || 'Web Development'}
        </div>
        <div className="external-icon">
          <ExternalLink size={18} />
        </div>
      </div>

      {/* Project Content */}
      <div className="card-content">
        <h3 className="project-title">
          {project.name || 'Project Title Placeholder'}
        </h3>
        
        <p className="project-description">
          {project.description || 'Project description will be provided here. This concise paragraph will describe the project\'s purpose, features, and key highlights to give visitors a clear understanding of what the project accomplishes.'}
        </p>

        <div className="tech-section">
          <div className="tech-tags">
            {project.tech && project.tech.length > 0 ? (
              project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))
            ) : (
              // Placeholder tech stack
              ['React', 'Node.js', 'MongoDB', 'CSS3'].map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Visit Website Button */}
      <div className="card-footer">
        <motion.a
          href={project.url || '#'} // Space for project website link
          target="_blank"
          rel="noopener noreferrer"
          className="visit-button"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <ExternalLink size={16} />
          Visit Website
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;