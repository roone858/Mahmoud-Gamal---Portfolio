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
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Home = () => {
  return (
    <section className="relative h-screen w-full  flex justify-center items-center  ">
      {/* Yellow background element with motion */}
      <div className="absolute -z-20 h-full w-full overflow-hidden">
        <motion.div
          className="h-screen w-1/4 translate-y-2.5 scale-150 -translate-x-1/5 absolute top-0 left-0 -rotate-12 bg-yellow lg:block hidden "
          initial={{ x: "-100%" }}
          animate={{ x: "-25%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {/* Main content container with staggered animations */}
      <motion.div
        className="container mx-auto h-[calc(100vh-73px)] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image section with hover motion */}
        <motion.div className="" variants={itemVariants}>
          <motion.div
            className="relative w-60 h-60 lg:w-80 lg:h-80 xl:w-100 xl:h-100 2xl:w-120 2xl:h-120"
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
          className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.h3
            className="text-base sm:text-lg text-yellow uppercase tracking-[4px] sm:tracking-[5px] mb-2 sm:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            hello!
          </motion.h3>

          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-yellow uppercase">{`I'm`}</span>{" "}
            <span className="text-yellow uppercase">mahmoud gamal</span>
          </motion.h1>

          <motion.h2
            className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Web Designer & Developer
          </motion.h2>

          <motion.p
            className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-lg lg:max-w-lg mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Creating beautiful, functional websites that drive results.
            Specializing in modern web technologies and user-centered design.
          </motion.p>

          {/* Buttons with tap/hover motion */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-4 w-full"
            variants={containerVariants}
          >
            <motion.button
              className="uppercase rounded-full px-6 hover:bg-yellow py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-red text-white border-2 border-red font-poppins"
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
