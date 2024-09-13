// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Categories from './components/Categories';


const App: React.FC = () => {
  return (
    <div>
      <head>
        <title>MyEcommerce - Your Favorite Shopping Destination</title>
        <meta name="description" content="Discover the best products and offers at MyEcommerce. Shop now for exclusive deals!" />
        <meta name="keywords" content="ecommerce, shopping, online store, discounts, offers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://www.myecommerce.com/" />
      </head>
      <Navbar />
      <main className="pt-16">
        <section id="home" className="text-center py-20">
          <h1 className="text-4xl font-bold">Welcome to MyEcommerce</h1>
         
        </section>
      
        <section id="carousel" className="py-20">
          <Carousel />
        </section>
        <Banner />
        <CategorySection />
        <section id="products" className="py-20">
          <ProductGrid />
        </section>
      </main>
    </div>
  );
};

export default App;
