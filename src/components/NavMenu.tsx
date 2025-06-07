import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu: React.FC = () => {
  return (
    <nav className="w-16 h-screen absolute top-0 right-0 flex flex-col justify-center items-center py-6 space-y-6">
      <a href="#" className="text-white ">
        <div className="w-12 h-12 bg-yellow-400 aspect-square rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </div>
      </a>
      <a href="#" className="text-gray-400  hover:text-gray-300">
        <div className="w-12 h-12 bg-secondary aspect-square rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-secondary aspect-square rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
        </div>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300">
        <div className="w-12 h-12 bg-secondary aspect-square rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faBriefcase} size="lg" />
        </div>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300">
        <div className="w-12 h-12 bg-secondary aspect-square rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </div>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300">
        <div className="w-12 h-12 bg-secondary aspect-square rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faComments} size="lg" />
        </div>
      </a>
    </nav>
  );
};

export default NavMenu;
