import React from 'react';

interface EducationItem {
  id: number;
  icon: string;
  title: string;
  duration: string;
  description: string;
}

const Resume: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      icon: 'fas fa-graduation-cap',
      title: 'Cross Platform mobile development and front-end, Information Technology Institute (ITI)',
      duration: 'Jun 2023 – Oct 2023 (4 mos)',
      description: 'ITI Intensive Code Camp – front-end and cross platform Specialization - is a product based program that will empower you to learn the latest technologies in front-end track and also the mobile cross platform technologies and tools (React.js , Angular 2, Flutter development).'
    },
    {
      id: 2,
      icon: 'fas fa-user-graduate',
      title: 'Faculty of Education Assiut University, Assiut University',
      duration: 'Jun 2018 – Jul 2023',
      description: 'good, Computer/Information Technology Administration and Management'
    },
    {
      id: 3,
      icon: 'fas fa-graduation-cap',
      title: 'Udacity Web Development Professional TRACK 2022',
      duration: 'Oct 2022 – Present (2 mos)',
      description: 'Working on server side REST APIs ,NODE JS , express , Agile mindset.'
    },
    {
      id: 4,
      icon: 'fas fa-user-graduate',
      title: 'Front-end Developer, Information Technology Institute (ITI)',
      duration: 'Jun 2022 – Jul 2022 (2 mos)',
      description: 'HTML/CSS development and managing the entire front-end using Bootstrap and JavaScript. Some experience with React and wireframing.'
    },
    {
      id: 5,
      icon: 'fas fa-graduation-cap',
      title: 'Udacity Web Development Challenger TRACK 2022',
      duration: 'Aug 2022 – Sep 2022 (2 mos)',
      description: 'Projects done: Created a website\'s dynamic homepage with mobile responsive interface. August 2022 | CXQWPEEP https://github.com/roone858/Main-Website'
    }
  ];

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <div className="relative w-full h-25 mb-12">
        <h2 className="absolute text-6xl uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          RESUME
        </h2>
        <h1 className="relative text-4xl text-center uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          Resume
        </h1>
      </div>
      
      <p className="text-gray-300 text-center mb-12">
        A brief document with a collection of achievements in professional,
        academic and personal areas
      </p>
      
      <div className="flex flex-wrap justify-center gap-8">
        {education.map((item) => (
          <div 
            key={item.id} 
            className="w-full md:w-[calc(50%-2rem)] relative pl-8 border-l-2 border-gray-800"
          >
            <i className={`${item.icon} absolute left-0 -translate-x-6 -translate-y-6 text-3xl text-red`}></i>
            <h3 className="text-xl font-medium mb-2 capitalize-first">
              {item.title}
            </h3>
            <span className="text-sm text-gray-400 block mb-3">{item.duration}</span>
            <p className="text-gray-300 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;