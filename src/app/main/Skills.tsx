import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 70 },
  ];

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <div className="relative w-full h-25 mb-12">
        <h2 className="absolute text-6xl uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          skills
        </h2>
        <h1 className="relative text-4xl text-center uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          my skills
        </h1>
      </div>
      
      <p className="text-gray-300 text-center w-full md:w-3/4 mx-auto mb-12">
        In a world that is constantly changing, there is no one subject or set
        of subjects that will serve you for the foreseeable future, let alone
        for the rest of your life. The most important skill to acquire now is
        learning how to learn.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white uppercase">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-nero h-4 rounded-full overflow-hidden">
              <div 
                className="bg-red h-full rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;