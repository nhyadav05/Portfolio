// src/components/CategorySection.tsx

import React from "react";

const categories = [
  { name: "Electronics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShl3ArKaFH82mXbIZvENcJL-3_GKuvNO_X0w&s" },
  { name: "Fashion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5_muWHX9U8bIufzXuuUYoRqxh89_MwIKZQ&s" },
  { name: "Home ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVDxlJhx4keLU98l5cImxL97Zs42GRJDVqg&s" },
  { name: "Beauty", image: "https://i.pinimg.com/736x/a3/bb/56/a3bb5608a85de2b0d3a5229322ae830f.jpg" },
];

const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-100 container">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
