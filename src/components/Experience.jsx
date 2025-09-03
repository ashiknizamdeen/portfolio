import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experienceData = [
    {
      title: 'Junior Software Engineer',
      company: 'Integro Technologies Sdn Bhd',
      period: '2023 - 2024',
      location: 'Kuala Lumpur, Malaysia',
      type: 'On-site',
      description: 'Contributed to banking systems enhancements and bug fixing using Java, JSP, and SQL, while collaborating with QA and DevOps teams to improve application performance.',
      skills: ['Java', 'JSP', 'SQL', 'MySQL', 'Git', 'GitHub'],
      achievements: [
        'Contributed to system enhancements and bug fixing',
        'Collaborated with QA and DevOps teams to improve application performance',
        'Managed full change requests lifecycle from concept to deployment'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Integro Technologies Sdn Bhd', // Display this text in one sentence in the website
      period: 'Aug 2022 - Dec 2022',
      location: 'Kuala Lumpur, Malaysia',
      type: 'On-site',
      description: 'Assisted in developing and testing enterprise applications, gaining hands-on experience with Java, JSP, and database management.',
      skills: ['Java', 'JSP', 'SQL', 'MySQL', 'SVN', 'Git', 'GitHub'],
      achievements: [
        'Assisted in developing and testing enterprise applications',
        'Gained hands-on experience with Java, JSP, and database management',
        'Collaborated with design teams effectively'
      ]
    }
  ];

  const educationData = [
    {
      title: 'Bachelors in Computer Science (Hons)',
      institution: 'Bachelors Degree',
      period: '2021 - 2024',
      location: 'Nilai, Malaysia',
      type: 'Education',
      description: 'Comprehensive study of computer science fundamentals and software engineering principles through various online platforms and self-directed learning.',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Web Development', 'Mobile Development'],
      achievements: [
        'Completed multiple certification courses',
        'Active participation in coding challenges',
        'Specialized in full-stack web development'
      ]
    },
    {
      title: 'International Advanced Level - Pearson',
      institution: 'Gateway International School',
      period: '2017 - 2019',
      location: 'Kandy, Sri Lanka',
      type: 'Education',
      description: 'Focused on Biology, Physics, Information Technology and Chemistry with strong analytical foundation.',
      skills: ['Information Technology', 'Biology', 'Physics', 'Chemistry', 'Problem Solving'],
      achievements: [
        'Developed strong problem-solving skills',
        'Introduction to programming concepts',
        'Foundation for technology career path'
      ]
    }
  ];

  const TimelineItem = ({ item, index, isEducation = false }) => (
    <motion.div
      className={`timeline-item ${isEducation ? 'education' : 'experience'}`}
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="timeline-marker">
        {isEducation ? <GraduationCap size={20} /> : <Briefcase size={20} />}
      </div>
      
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="timeline-title-section">
            <h3 className="timeline-title">{item.title}</h3>
            <div className="timeline-company-info">
              <h4 className="timeline-company">
                {isEducation ? <Building size={16} /> : <Award size={16} />}
                <span className="company-name">{isEducation ? item.institution : item.company}</span>
              </h4>
              {!isEducation && item.type && (
                <span className="timeline-type">{item.type}</span>
              )}
            </div>
          </div>
          
          <div className="timeline-meta">
            <span className="timeline-period">
              <Calendar size={16} />
              {item.period}
            </span>
            <span className="timeline-location">
              <MapPin size={16} />
              {item.location}
            </span>
          </div>
        </div>
        
        <p className="timeline-description">{item.description}</p>
        
        <div className="timeline-skills">
          {item.skills.map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        <ul className="timeline-achievements">
          {item.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">
              My professional journey and educational background
            </p>
          </motion.div>

          <motion.div className="experience-tabs" variants={itemVariants}>
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={20} />
                Experience
              </button>
              <button 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={20} />
                Education
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="experience-grid"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {activeTab === 'experience' ? experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="exp-card"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    <Briefcase size={18} />
                  </div>
                  <div className="card-meta">
                    <span className="card-period">{item.period}</span>
                    <span className="card-type">{item.type}</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-company">{item.company}</h4>
                  <div className="card-location">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                  
                  <p className="card-description">{item.description}</p>
                  
                  <div className="card-skills">
                    {item.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="skill-pill">{skill}</span>
                    ))}
                    {item.skills.length > 4 && (
                      <span className="skill-more">+{item.skills.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )) : educationData.map((item, index) => (
              <motion.div
                key={`edu-${index}`}
                className="exp-card edu-card"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="card-header">
                  <div className="card-icon edu-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="card-meta">
                    <span className="card-period">{item.period}</span>
                    <span className="card-type edu-type">Education</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-company edu-institution">{item.institution}</h4>
                  <div className="card-location">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                  
                  <p className="card-description">{item.description}</p>
                  
                  <div className="card-skills">
                    {item.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="skill-pill edu-pill">{skill}</span>
                    ))}
                    {item.skills.length > 4 && (
                      <span className="skill-more">+{item.skills.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;