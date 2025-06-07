"use client";
// src/app/(main)/page.tsx
import React from "react";
import Image from "next/image";
import heroImage from "@/assets/main.png";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Yellow background element with motion */}
      <motion.div 
        className="h-screen w-1/4 translate-y-2.5 scale-150 -translate-x-1/2 absolute top-0 left-0 -rotate-12 bg-yellow"
        initial={{ x: "-100%" }}
        animate={{ x: "-25%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Main content container with staggered animations */}
      <motion.div
        className="container mx-auto h-[calc(100vh-73px)] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image section with hover motion */}
        <motion.div 
          className="w-full md:w-auto flex items-center justify-center flex-1  md:h-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={heroImage}
              alt="Hero"
              fill
              className="rounded-full transition-all hover:-translate-y-1 hover:-translate-x-1 object-cover"
              priority
              sizes="(max-width: 768px) 40vw, 30vw"
            />
          </motion.div>
        </motion.div>

        {/* Text content section with staggered text animation */}
        <motion.div 
          className="w-full md:w-auto flex flex-col items-start justify-center px-4 md:px-10 h-[40vh] md:h-auto"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow uppercase font-extrabold leading-tight"
            variants={itemVariants}
          >
            {`I'm`} <span className="text-red">mahmoud gamal</span>
          </motion.h1>
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white"
            variants={itemVariants}
          >
            Web designer.
          </motion.h1>
          
          {/* Buttons with tap/hover motion */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full"
            variants={containerVariants}
          >
            <motion.button 
              className="uppercase rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-red text-white border-2 border-red font-poppins"
              whileHover={{ scale: 1.05, y: -2, x: 2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              hire me
            </motion.button>
            
            <motion.button 
              className="uppercase rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-transparent text-white border-2 border-red font-poppins hover:bg-red"
              whileHover={{ scale: 1.05, y: -2, x: 2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <a
                className="no-underline text-white"
                href="https://www.upwork.com/freelancers/mahmoudgamal109"
                target="_blank"
                rel="noopener noreferrer"
              >
                upWork
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;