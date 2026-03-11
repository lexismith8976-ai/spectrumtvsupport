import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import SupportCategories from '../components/home/SupportCategories';
import AboutSection from '../components/home/AboutSection';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SupportCategories />
      <AboutSection />
    </motion.div>
  );
};

export default HomePage;