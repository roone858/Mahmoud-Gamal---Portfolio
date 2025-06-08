"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faComments,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu: React.FC = () => {
  const pathname = usePathname();
  const navItems = [
    { icon: faHome, label: "Home", href: "/" },
    { icon: faUser, label: "About", href: "/about" },
    { icon: faBriefcase, label: "Portfolio", href: "/portfolio" },
    { icon: faEnvelope, label: "Contact", href: "/contact" },
    { icon: faComments, label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 md:block hidden">
      <div className="flex flex-col items-center space-y-4 p-2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: IconDefinition;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active = false }) => {
  return (
    <Link href={href} passHref>
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 hidden group-hover:block">
          <div className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
            {label}
            <div className="absolute left-full top-1/2 w-2 h-2 bg-gray-800 transform -translate-y-1/2 rotate-45"></div>
          </div>
        </div>

        {/* Button */}
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out
            ${
              active
                ? "bg-goldenrod text-white"
                : "bg-secondary text-gray-300 hover:bg-gray-600 hover:text-white"
            }
            group-hover:scale-110`}
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </button>

        {/* Active indicator */}
      
      </div>
    </Link>
  );
};

export default NavMenu;