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

      <div className="max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start mb-12">
            <div className="flex-shrink-0 mr-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-black" />
              </div>
            </div>
            <div>
              <div className="text-yellow-400 text-sm mb-2">{item.date}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;
