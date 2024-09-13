// src/components/ProductGrid.tsx

import React from 'react';

const products = [
  {
    id: 1,
    image: '/braclet.webp',  // Replace with actual image paths
    name: 'Product 1',
    price: 99.99,
    discountPrice: 79.99,
    offer: '20% Off',
  },
  {
    id: 2,
    image: '/giva.webp',
    name: 'Product 2',
    price: 129.99,
    discountPrice: 99.99,
    offer: '25% Off',
  },
  {
    id: 3,
    image: '/necklace.avif',
    name: 'Product 3',
    price: 89.99,
    discountPrice: 69.99,
    offer: '30% Off',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRYnvMqV6Xkr88ySYUE0OLrz80MBG4A79Qw&s',
    name: 'Product 4',
    price: 89.99,
    discountPrice: 69.99,
    offer: '30% Off',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5X5ik5q47mDPnMmKt28b3n6hgQqSaLMlXQ&s',
    name: 'Product 5',
    price: 129.99,
    discountPrice: 99.99,
    offer: '25% Off',
  },
];

const ProductGrid: React.FC = () => (
  <div className="container py-8" id="products">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">
              {product.offer}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center mb-2">
              <span className="text-gray-500 line-through mr-2 text-sm">${product.price.toFixed(2)}</span>
              <span className="text-red-600 font-bold text-lg">${product.discountPrice.toFixed(2)}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGrid;
