import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Palette, label: "Design Systems", value: "20+" },
    { icon: Zap, label: "Years Experience", value: "1.5+" }
  ];

  return (
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
  );
};

export default Stats;