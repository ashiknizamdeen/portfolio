import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Figma, Palette } from 'lucide-react';
import './Designs.css';

const Designs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const designs = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "UI/UX Design",
      description: "Modern admin dashboard design for e-commerce platforms with data visualization and user management.",
      image: "/api/placeholder/400/300",
      tools: ["Figma", "Adobe XD"],
      link: "#",
      type: "Dashboard"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Design",
      description: "Clean and intuitive mobile banking application with focus on security and user experience.",
      image: "/api/placeholder/400/300",
      tools: ["Figma", "Sketch"],
      link: "#",
      type: "Mobile App"
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Web Design",
      description: "Elegant restaurant website design with online reservation system and menu showcase.",
      image: "/api/placeholder/400/300",
      tools: ["Figma", "Adobe Photoshop"],
      link: "#",
      type: "Website"
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      category: "Landing Page",
      description: "Conversion-focused landing page design for a SaaS product with clear call-to-actions.",
      image: "/api/placeholder/400/300",
      tools: ["Figma", "Adobe Illustrator"],
      link: "#",
      type: "Landing Page"
    },
    {
      id: 5,
      title: "Fitness App Interface",
      category: "Mobile Design",
      description: "Motivational fitness tracking app design with workout plans and progress tracking.",
      image: "/api/placeholder/400/300",
      tools: ["Figma", "Principle"],
      link: "#",
      type: "Mobile App"
    },
    {
      id: 6,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity design including logo, color palette, and brand guidelines.",
      image: "/api/placeholder/400/300",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      link: "#",
      type: "Branding"
    }
  ];

  return (
    <section id="designs" className="designs">
      <div className="container">
        <motion.div
          className="designs-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Design</h2>
            <p className="section-subtitle">
              Creative UI/UX designs and brand identity work
            </p>
          </motion.div>

          <motion.div className="designs-scroll-container" variants={itemVariants}>
            <motion.div 
              className="designs-scroll"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              dragElastic={0.1}
              whileDrag={{ cursor: "grabbing" }}
            >
              {designs.map((design, index) => (
                <motion.div
                  key={design.id}
                  className={`design-card ${hoveredCard === design.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(design.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                  }}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  data-cursor="hover"
                >
                  <div className="design-image">
                    <img src={design.image} alt={design.title} />
                    <div className="image-overlay">
                      <motion.div
                        className="overlay-content"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          className="view-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          data-cursor="hover"
                        >
                          <Eye size={20} />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="design-content">
                    <h3 className="design-title">{design.title}</h3>
                    <p className="design-description">{design.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Designs;