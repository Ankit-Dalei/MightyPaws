import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import BestDelivered from '../components/Home/BestDelivered';
import MenuSection from '../components/Home/MenuSection';
import ChefSection from '../components/Home/ChefSection';
import PetsSection from '../components/Home/PetsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import gsap from 'gsap';

import homeData from '../data/homeData.json';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <BestDelivered />
      <MenuSection />
      <PetsSection />
      <ChefSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
