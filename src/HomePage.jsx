import React, { useEffect } from 'react';
import Hero from './Heros';
import FeaturesSection from './FeaturesSection';
import BottleCarousel from './BottleCarousel';
import ZigzagSection from './ZigzagSection';
import './HomePage.scss';

const HomePage = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  // Zigzag section data
  const zigzagData = [
    {
      id: 1,
      title: "Superior Hydration Experience",
      description: "Our innovative design maintains optimal temperature for hours, ensuring your drinks stay refreshing throughout the day. The ergonomic grip makes it comfortable to carry anywhere.",
      image: "/images/hydration.jpg",
      imageAlt: "Person hydrating with Cattle bottle",
      reverse: false
    },
    {
      id: 2,
      title: "Unmatched Durability",
      description: "Built to last with premium materials that resist impacts, scratches, and everyday wear. Our bottles are designed for adventurers, athletes, and everyday users who demand reliability.",
      image: "/images/durability.jpg",
      imageAlt: "Cattle bottle durability demonstration",
      reverse: true
    },
    {
      id: 3,
      title: "Eco-Conscious Design",
      description: "Each bottle prevents hundreds of single-use plastics from entering our environment. Made with sustainable materials and fully recyclable packaging to minimize our ecological footprint.",
      image: "/images/eco-friendly.jpg",
      imageAlt: "Eco-friendly materials used in Cattle bottles",
      reverse: false
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      <FeaturesSection />
      <BottleCarousel />
      {zigzagData.map(item => (
        <ZigzagSection
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          imageAlt={item.imageAlt}
          reverse={item.reverse}
        />
      ))}
    </div>
  );
};

export default HomePage;