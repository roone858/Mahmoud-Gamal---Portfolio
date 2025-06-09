"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Button: React.FC<{
  icon: IconDefinition;
  text: string;
  href?: string;
}> = ({ icon, text, href }) => {
  return (
    <motion.a
      href={href || ""} // Replace with the path to your CV file
      download
      className="inline-flex items-center justify-between  border-1 border-goldenrod text-white  rounded-full font-semibold text-lg"
      whileHover={{ backgroundColor: "#ffb400" }} // Scale up on hover
      whileTap={{ backgroundColor: "#ffb400" }} // Scale down on click
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <span className="px-6">{text}</span>
      <div className=" flex items-center justify-center bg-goldenrod rounded-full text-white w-12 h-12">
        <FontAwesomeIcon icon={icon} />
      </div>
    </motion.a>
  );
};

export default Button;
