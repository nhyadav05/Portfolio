"use client";
import React from "react";
import Slider from "react-slick";

// Static categories data
const categories = [
  { id: "1", name: "Electronics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShl3ArKaFH82mXbIZvENcJL-3_GKuvNO_X0w&s" },
  { id: "2", name: "Fashion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5_muWHX9U8bIufzXuuUYoRqxh89_MwIKZQ&s" },
  { id: "3", name: "Home & Garden", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVDxlJhx4keLU98l5cImxL97Zs42GRJDVqg&s" },
  { id: "4", name: "Toys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE16YA8KAMBzKHsK4HTSdIT9oaenrCfXsjmg&s" },
  { id: "5", name: "Beauty", image: "https://i.pinimg.com/736x/a3/bb/56/a3bb5608a85de2b0d3a5229322ae830f.jpg" },
];


const Categories: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
      return (
        <div className="bg-gray-50 px-4 py-2 mt-2 max-w-screen-xl mx-auto">
          <div className="text-center">
            <p>Categories Component is Rendering</p>
            {/* Static category example */}
            <div className="flex justify-center">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-14 h-14 relative overflow-hidden rounded-lg mb-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShl3ArKaFH82mXbIZvENcJL-3_GKuvNO_X0w&s"
                    alt="Example"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black font-semibold text-xs">Example</span>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Categories;
