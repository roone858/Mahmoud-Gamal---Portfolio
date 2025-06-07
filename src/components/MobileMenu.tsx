"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faComments,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-6 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <nav className="mt-12 space-y-4">
              <a
                href="#"
                className="flex items-center text-yellow-400 hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                HOME
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                ABOUT
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                PORTFOLIO
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                CONTACT
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                BLOG
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
