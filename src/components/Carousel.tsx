// src/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="flex justify-center mt-4">{dots}</div>
    ),
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {['/banner1.png', '/banner2.png', '/banner3.png'].map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img}
              alt={`Banner ${idx + 1}`}
              className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

