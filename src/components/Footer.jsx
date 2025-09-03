import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Ashik Nizamdeen. Developed using <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;