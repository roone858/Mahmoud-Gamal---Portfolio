"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/assets/main.png";
import { motion } from "framer-motion";


const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Yellow background element */}
      <motion.div
        className="hidden lg:block absolute h-[100vh] w-1/4 -left-1/4 -rotate-12 bg-goldenrod origin-left"
        initial={{ x: "-100%" }}
        animate={{ x: "-25%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      />

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 h-[calc(100vh-73px)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image section */}
        <motion.div 
          className="flex-shrink-0"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            whileHover={{ 
              scale: 1.05,
              rotate: 2
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              damping: 10
            }}
          >
            <Image
              src={heroImage}
              alt="Mahmoud Gamal - Web Designer & Developer"
              fill
              className="rounded-full object-cover shadow-xl hover:shadow-2xl transition-all duration-300"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
            />
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6"
          variants={containerVariants}
        >
          <motion.h3
            className="text-lg sm:text-xl text-goldenrod uppercase tracking-[5px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            hello!
          </motion.h3>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-goldenrod">{`I'm`}</span>{" "}
            <span className="text-goldenrod">Mahmoud Gamal</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Web Designer & Developer
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg max-w-md md:max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Creating beautiful, functional websites that drive results.
            Specializing in modern web technologies and user-centered design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={containerVariants}
          >
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base bg-red text-white border-2 border-red rounded-full font-medium hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Hire Me
            </motion.button>

            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base bg-transparent text-white border-2 border-red rounded-full font-medium hover:bg-red transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <a
                href="https://www.upwork.com/freelancers/mahmoudgamal109"
                target="_blank"
                rel="noopener noreferrer"
              >
                UpWork Profile
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;