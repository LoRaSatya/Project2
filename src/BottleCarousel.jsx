import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BottleCarousel.scss';

const BottleCarousel = () => {
  const bottleImages = [
    {
      id: 1,
      src: '/images/bottle-2.jpg',
      alt: 'Classic Black Water Bottle'
    },
    {
      id: 2,
      src: '/images/bottle-2.jpg',
      alt: 'Ocean Blue Water Bottle'
    },
    {
      id: 3,
      src: '/images/bottle-3.jpg',
      alt: 'Forest Green Water Bottle'
    },
    {
      id: 4,
      src: '/images/bottle-4.jpg',
      alt: 'Rose Gold Water Bottle'
    },
    {
      id: 5,
      src: '/images/bottle-5.jpg',
      alt: 'Limited Edition Pattern Water Bottle'
    },
   
  ];

  return (
    <section id="gallery" className="carousel-section">
      <div className="container">
        <h2 className="section-title">Explore Our Collection</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            }
          }}
          className="bottle-swiper"
        >
          {bottleImages.map(image => (
            <SwiperSlide key={image.id}>
              <div className="carousel-slide">
                <img src={image.src} alt={image.alt} />
                <div className="slide-overlay">
                  <p>{image.alt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BottleCarousel;