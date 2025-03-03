import React from 'react';
import './FeaturesSection.scss';
import { FaRuler, FaRecycle, FaTruck, FaLeaf } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Bottle Sizes",
      description: "Available in various capacities from 16oz to 40oz to suit your hydration needs",
      icon: <FaRuler className="feature-icon" />
    },
    {
      id: 2,
      title: "Reusability",
      description: "Designed for thousands of uses, eliminating the need for disposable bottles",
      icon: <FaRecycle className="feature-icon" />
    },
    {
      id: 3,
      title: "Doorstep Delivery",
      description: "Free shipping nationwide with fast and reliable delivery to your door",
      icon: <FaTruck className="feature-icon" />
    },
    {
      id: 4,
      title: "Eco-Friendly Material",
      description: "Made from sustainable materials that are better for you and the planet",
      icon: <FaLeaf className="feature-icon" />
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Cattle Bottles?</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;