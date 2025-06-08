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
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: faHome, label: "HOME", href: "/" },
    { icon: faUser, label: "ABOUT", href: "/about" },
    { icon: faBriefcase, label: "PORTFOLIO", href: "/portfolio" },
    { icon: faEnvelope, label: "CONTACT", href: "/contact" },
    { icon: faComments, label: "BLOG", href: "/blog" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: "spring", 
        damping: 25,
        stiffness: 300 
      } 
    },
    exit: { 
      opacity: 0, 
      x: "100%", 
      transition: { 
        duration: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none fixed top-5 right-6 z-40"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon 
          icon={isOpen ? faTimes : faBars} 
          size="xl" 
          className="transition-transform hover:scale-110"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            
            {/* Menu */}
            <motion.div
              className="fixed top-0 right-0 w-72 h-screen bg-charcoal text-white p-6 z-50 shadow-2xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="mt-20 space-y-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "bg-goldenrod text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="mr-3 w-5 text-center" 
                      />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;