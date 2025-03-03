import React from 'react';
import './ZigzagSection.scss';

const ZigzagSection = ({ title, description, image, imageAlt, reverse }) => {
  return (
    <section className={`zigzag-section ${reverse ? 'reverse' : ''}`}>
      <div className="container">
        <div className="zigzag-content">
          <div className="zigzag-image-container">
            <img src={image} alt={imageAlt} className="zigzag-image" />
          </div>
          
          <div className="zigzag-text">
            <h2 className="zigzag-title">{title}</h2>
            <p className="zigzag-description">{description}</p>
            <a href="#" className="zigzag-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigzagSection;