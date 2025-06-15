"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/Components/Header";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [likedProjects, setLikedProjects] = useState<number[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mahmoud Gamal Portfolio | Next.js App  ",
      category: "Full Stack",
      images: ["/portfolio.png", "/portfolio-2.png"],
      description:
        "A comprehensive school management system built with PostgreSQL, Express, React, and Node.js. Features include student enrollment, grade tracking, and teacher management.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
      ],
      demoUrl: "https://mahmoud-gamal-portfolio.vercel.app/",
      githubUrl: "https://github.com/roone858/Mahmoud-Gamal---Portfolio",
    },
    {
      id: 2,
      title: "Sukoon | E-commerce Website",
      category: "Full Stack",
      images: [
        "/Sukoon Mockup.png",
        "/sukoon.png",
        "/sukoon 2.png",
        "/sukoon (2).png",
      ],
      description:
        "A responsive static website showcasing Egypt's future work initiatives with modern animations and interactive elements.",
      technologies: [
        "Nest.js",
        "MongoDB",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      demoUrl: "https://sukoon-blond.vercel.app/",
    },
    {
      id: 3,
      title: "Freshchat",
      category: "chat application",
      images: ["/fresh chat.png", "/fresh chat 2.png"],
      description: `Backend (NestJS):
- Manages user authentication and authorization.
- Handles communication with the MongoDB database for storing and retrieving chat messages.
- Utilizes Socket.io to enable real-time communication between the server and clients.

Database (MongoDB):
- Stores chat messages and user data in a NoSQL format.

Real-time Communication (Socket.io):
- Facilitates real-time, bidirectional communication between the server and connected clients.

Frontend (React):
- Provides a user interface for users to interact with the chat application.`,
      technologies: [
        "Nest.js",
        "Socket.io",
        "Websocket",
        "MongoDB",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JWT",
        "Node.js",
        "Express",
      ],
      // githubUrl: "#",
    },
    {
      id: 4,
      title: "Ciseco-E-commerce-Vite-React-Redux-Tailwind",
      category: "Frontend",
      images: ["/ciseco.png", "/ciseco 1.png"],
      description: `Register or log in to start shopping.
Browse products and add them to your cart.
Review your cart and proceed to checkout.
Complete the checkout process, providing shipping and payment details.
View your order history and user profile.`,
      technologies: [
        "Redux",
        "Vite",
        "Typescript",
        "React",
        "REST API",
        "Chart.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Stripe",
        "Paypal",
      ],
      demoUrl: "https://ciseco-e-commerce-vite-react-redux.vercel.app/",
    },
    {
      id: 5,
      title: "Most Countries Project",
      category: "Frontend",
      images: ["/sukoon.png", "/sukoon.png"],
      description:
        "Comparative analysis dashboard for country statistics with data visualization.",
      technologies: ["React", "D3.js", "Tailwind CSS"],
      githubUrl: "#",
    },
  ];

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25 },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <section className="min-h-screen  text-white py-12 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}

      <Header title="works" subtitle="my" goldenrod="portfolio" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 ">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group"
            custom={project.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-charcoal  rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Project Image */}
              <div className="relative p-4  m-4  mb-0 h-48 rounded-lg sm:h-56 overflow-hidden">
                {/* <div className="absolute m-4 mb-0  rounded-lg inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-yellow-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  {/* Like Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(project.id);
                    }}
                    className="flex justify-center items-center rounded-full transition-colors"
                    aria-label={
                      likedProjects.includes(project.id)
                        ? "Unlike project"
                        : "Like project"
                    }
                  >
                    {likedProjects.includes(project.id) ? (
                      <FaHeart className="text-red-500 text-sm  sm:text-xl" />
                    ) : (
                      <FaRegHeart className="text-white/75 text-sm sm:text-xl hover:text-red-500 transition-colors" />
                    )}{" "}
                    <span className="ml-2 text-white/75 text-sm">{" 267"}</span>
                  </motion.button>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white/75 mb-3 line-clamp-2">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative bg-charcoal rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              variants={modalVariants}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-background hover:bg-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl sm:text-2xl" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="h-48 sm:h-64 md:h-full bg-background rounded-lg flex items-center justify-center">
                  <Image
                    src={selectedProject.images[1]}
                    alt={selectedProject.title}
                    width={500}
                    height={500}
                    className="object-cover rounded-l "
                  />
                </div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-yellow-400 text-sm sm:text-base font-medium uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <button
                      onClick={() => toggleLike(selectedProject.id)}
                      className="flex items-center text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {likedProjects.includes(selectedProject.id) ? (
                        <FaHeart className="text-red-500 mr-2 text-lg sm:text-xl" />
                      ) : (
                        <FaRegHeart className="mr-2 text-lg sm:text-xl" />
                      )}
                      {likedProjects.includes(selectedProject.id)
                        ? "Liked"
                        : "Like"}
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-gray-300 text-sm sm:text-base mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-white text-lg sm:text-xl font-medium mb-2">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-background text-gray-300 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 flex-col sm:flex-row">
                    {selectedProject.demoUrl && (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "#facc15" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-4 py-2 bg-yellow-400 text-black rounded-lg transition-colors font-medium text-sm sm:text-base"
                      >
                        Live Demo{" "}
                        <FaExternalLinkAlt className="ml-2 text-sm sm:text-base" />
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-4 py-2 bg-background text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
                      >
                        View Code{" "}
                        <FaExternalLinkAlt className="ml-2 text-sm sm:text-base" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
