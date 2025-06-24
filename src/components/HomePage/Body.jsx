import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';

const Body = () => {
  const { properties, isLoading } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <FeaturedProperties properties={properties} isLoading={isLoading} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;