// src/components/Banner.tsx

import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Image */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/sale-banner.jpg" // Replace with your image path
            alt="Sale Banner"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {/* Text and Button Overlay */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-center md:text-left bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold text-white mb-4">Special Sale</h2>
            <p className="text-lg text-white mb-6">
              Don't miss out on our limited-time offers. Shop now and enjoy
              exclusive discounts on your favorite products!
            </p>
            <a
              href="#shop-now"
              className="inline-block bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Shop Now
            </a>
          </div> */}
        </div>

        {/* Text Content (for medium to large screens) */}
        <div className="md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Sale</h2>
          <p className="text-lg mb-6">
            Don't miss out on our limited-time offers. Shop now and enjoy
            exclusive discounts on your favorite products!
          </p>
          <a
            href="#shop-now"
            className="inline-block bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
