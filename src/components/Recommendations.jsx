import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, Users } from 'lucide-react';
import './Recommendations.css';

const Recommendations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -10
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const recommendations = [
    {
      name: "Ir. Ts. Gs. EUR ING. Inv. Keith Chong Peng Lean",
      title: "Head of Department, Senior Lecturer, Certified Inventor",
      content: "Mr. Ashik is an exemplary student who is both active in curriculum and leadership activities while maintaining good grades. He is mature, independent, resourceful, and able to manage work progress well.",
      icon: Award
    },
    {
      name: "Ts. Tatchanaamoorti Purnshatman",
      title: "Head of Computer Science, Senior Lecturer, FBCS, MIET UK",
      content: "Ashik has excellent communication skills. He was highly proficient in applying course material in analyzing problem situations.",
      icon: Star
    },
    {
      name: "Siti Hajar Mokhter",
      title: "Academician & Mentor",
      content: "He is a fast learner who willingly embraces challenges and seeks opportunities for personal growth. His exceptional work ethic and time management skills enable him to remain calm and focused while handling multiple responsibilities.",
      icon: Users
    },
    {
      name: "Nor Hafizah Mohamed Halip",
      title: "Shizuoka University",
      content: "He is a bright student who consistently engaged in class. His dedication and ability to turn feedback into actionable improvements are commendable.",
      icon: Quote
    },
    {
      name: "Noor Hidayah Ros Azamin",
      title: "Academic & Research Professional",
      content: "Ashik is not only academically strong but also possesses excellent communication skills. He has a natural ability to express ideas clearly and effectively, whether in group discussions or presentations.",
      icon: Award
    },
    {
      name: "Dr. Nurulanis Mohd Yusoff",
      title: "Lecturer at Mila University",
      content: "I have consistently been impressed by Ashik's perseverance and originality. Beyond the curriculum, Ashik has always taken initiative to broaden his learning horizons.",
      icon: Star
    }
  ];

  return (
    <section className="recommendations">
      <motion.div
        className="recommendations-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">RECOMMENDATIONS</h2>
          <p className="section-subtitle">
            What colleagues and mentors say about my work
          </p>
        </motion.div>

        <div className="recommendations-grid">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              data-cursor="hover"
            >
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              
              <div className="recommendation-content">
                <p className="recommendation-text">
                  "{recommendation.content}"
                </p>
              </div>

              <div className="recommender-info">
                <div className="recommender-icon">
                  <recommendation.icon size={20} />
                </div>
                <div className="recommender-details">
                  <h4 className="recommender-name">{recommendation.name}</h4>
                  <p className="recommender-title">{recommendation.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Recommendations;