'use client'; // Added for client-side rendering if animations are used

import React from 'react';
import { motion } from 'framer-motion'; // Import for animations

interface HeaderProps {
  title: string;
  subtitle: string;
  goldenrod?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, goldenrod }) => {
  return (
    <>
      {/* Mobile Sticky Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 block md:hidden w-full py-4 px-6 bg-charcoal z-20 shadow-md transition-all duration-300"
        initial={{ y: -100 }} // Start off-screen
        animate={{ y: 0 }} // Slide in
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-xl text-white  font-extrabold uppercase font-poppins text-left">
          {subtitle}{' '}
          {goldenrod && <span className="text-yellow-400">{' ' + goldenrod}</span>}
        </h1>
      </motion.header>

      {/* Main Header (Desktop) */}
  
      <motion.div
        className="relative  w-full h-32 mt-12 md:mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal uppercase text-center font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {title}
        </h2>
        <h1 className="absolute text-2xl text-nowrap sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold uppercase font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {subtitle}{' '}
          {goldenrod && <span className="text-yellow-400">{' ' + goldenrod}</span>}
        </h1>
      </motion.div>
    </>
  );
};

export default Header;