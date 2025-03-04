import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const text = textRef.current;
      if (!text) return;
      
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      
      const spans = text.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.05}s`;
      });
    };

    animateText();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={textRef} className="animated-text">
          Hydration Reinvented for Modern Living
        </h1>
        <p className="hero-subtitle">Premium water bottles crafted for your lifestyle</p>
        <div className="hero-buttons">
          <a href="#features" className="btn btn-primary">Discover Features</a>
          <a href="#gallery" className="btn btn-secondary">View Collection</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;