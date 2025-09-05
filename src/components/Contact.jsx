import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const contactMethods = [
    {
      icon: Phone,
      label: '+94 77 558 9559',
      href: 'tel:+94775589559',
      type: 'phone'
    },
    {
      icon: Mail,
      label: 'ashikshaheed4@gmail.com',
      href: 'mailto:ashikshaheed4@gmail.com',
      type: 'email'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ashiknizamdeen',
      type: 'social'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashik-nizamdeen-339962233/',
      type: 'social'
    },
    {
      icon: ExternalLink,
      label: 'Hire Me on Fiverr',
      href: 'http://www.fiverr.com/s/42BN43l',
      type: 'fiverr'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">CONTACT ME</h2>
            <p className="section-subtitle">
              Let's work together to create something amazing
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-left" variants={itemVariants}>
              <div className="contact-intro">
                <h3>Get In Touch</h3>
                <p>Ready to start your next project? Let's discuss how we can work together.</p>
                
                <motion.div className="hire-me-cta" variants={itemVariants}>
                  <div className="cta-highlight">
                    <div className="availability-status">
                      <div className="status-dot"></div>
                      <span>Available for Projects</span>
                    </div>
                    <p className="cta-text">
                      Looking for professional web development services? 
                      Check out my Fiverr gig for custom solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="contact-right" variants={itemVariants}>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    className={`contact-method ${method.type === 'fiverr' ? 'fiverr-method' : ''}`}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="hover"
                  >
                    <div className="method-icon">
                      <method.icon size={20} />
                    </div>
                    <span className="method-label">{method.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;