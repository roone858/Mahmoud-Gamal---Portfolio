import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 93 },
    { name: 'TYPESCRIPT', percentage: 88 },
    { name: 'REACT', percentage: 90 },
    { name: 'NEXT.JS', percentage: 85 },
    { name: 'ANGULAR', percentage: 70 },
    { name: 'NODE.JS', percentage: 85 },
    { name: 'NESTJS', percentage: 92 },
    { name: 'MONGODB', percentage: 80 },
    { name: 'POSTGRESQL', percentage: 75 },
    { name: 'STRIPE INTEGRATION', percentage: 85 },
    { name: 'TAILWIND CSS', percentage: 90 },
    { name: 'BOOTSTRAP', percentage: 70 },
    { name: 'PHP', percentage: 50 },
    { name: 'WORDPRESS', percentage: 60 },
    { name: 'JQUERY', percentage: 40 },
  ];

  return (
    <div className="min-h-screen text-white   ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">MY SKILLS</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-4 md:px-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#252525"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * skill.percentage) / 100}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold">{skill.percentage}%</span>
              </div>
            </div>
            <p className="mt-4 text-sm sm:text-lg uppercase font-medium tracking-wider">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;