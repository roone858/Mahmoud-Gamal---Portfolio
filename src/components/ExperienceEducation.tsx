import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const ExperienceEducation: React.FC = () => {
  const items = [
    {
      id: 1,
      icon: faBriefcase,
      title: 'Cross Platform mobile development and front-end, Information Technology Institute (ITI)',
      date: 'Jun 2023 – Oct 2023 (4 mos)',
      description: 'ITI Intensive Code Camp – front-end and cross platform Specialization - is a product based program that will empower you to learn the latest technologies in front-end track and also the mobile cross platform technologies and tools (React.js , Angular 2, Flutter development).'
    },
    {
      id: 2,
      icon: faGraduationCap,
      title: 'Faculty of Education Assiut University, Assiut University',
      date: 'Jun 2018 – Jul 2023',
      description: 'good, Computer/Information Technology Administration and Management'
    },
    {
      id: 3,
      icon: faGraduationCap,
      title: 'Udacity Web Development Professional TRACK 2022',
      date: 'Oct 2022 – Present (2 mos)',
      description: 'Working on server side REST APIs ,NODE JS , express , Agile mindset.'
    },
    {
      id: 4,
      icon: faBriefcase,
      title: 'Front-end Developer, Information Technology Institute (ITI)',
      date: 'Jun 2022 – Jul 2022 (2 mos)',
      description: 'HTML/CSS development and managing the entire front-end using Bootstrap and JavaScript. Some experience with React and wireframing.'
    },
    {
      id: 5,
      icon: faGraduationCap,
      title: 'Udacity Web Development Challenger TRACK 2022',
      date: 'Aug 2022 – Sep 2022 (2 mos)',
      description: 'Projects done: Created a website\'s dynamic homepage with mobile responsive interface. August 2022 | CXQWPEEP https://github.com/roone858/Main-Website'
    }
  ];

  return (
    <div className="min-h-screen text-white py-12 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        EXPERIENCE & EDUCATION
      </h1>

      <div className="max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start mb-8 md:mb-12 relative group">
            {/* Timeline connector */}
            {index !== items.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-700 group-last:hidden"></div>
            )}
            
            <div className="flex-shrink-0 mr-4 md:mr-6 z-10">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <FontAwesomeIcon icon={item.icon} className="text-black text-lg" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="text-yellow-400 text-sm md:text-base mb-1 md:mb-2">{item.date}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;