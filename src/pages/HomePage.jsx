import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import StatsStrip from '../components/StatsStrip';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Services />
      <StatsStrip />
      <Testimonials />
      <Clients />
    </>
  );
};

export default HomePage;
