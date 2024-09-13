// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full py-4 px-8 flex justify-center items-center bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 shadow-md z-50">
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        <div className="text-xl font-bold text-gray-800">MyEcommerce</div>
        <div className="flex flex-1 space-x-4 justify-center items-center text-sm md:text-base">
          <a href="#home" className="hover:text-gray-700 cursor-pointer">Home</a>
          <a href="#about" className="hover:text-gray-700 cursor-pointer">About</a>
          <a href="#products" className="hover:text-gray-700 cursor-pointer">Products</a>
          <a href="#contact" className="hover:text-gray-700 cursor-pointer">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15l9-9 4 4-9 9-4-4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
