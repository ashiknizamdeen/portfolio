import React, { useEffect, useState, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check for touch devices
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(hover: none)').matches;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  // Handle mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Handle hover states
  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest('a, button, .clickable, [data-cursor="hover"], .theme-toggle, input, textarea, [role="button"]');
    setIsHovering(!!target);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Use throttled mouse move for better performance
    let ticking = false;
    const throttledMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', throttledMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseOver]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`}
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
      }}
    />
  );
};

export default CustomCursor;