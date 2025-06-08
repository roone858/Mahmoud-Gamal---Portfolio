import React from 'react';


const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 25 },
    { name: 'JAVASCRIPT', percentage: 89 },
    { name: 'CSS', percentage: 70 },
    { name: 'PHP', percentage: 66 },
    { name: 'WORDPRESS', percentage: 95 },
    { name: 'JQUERY', percentage: 50 },
    { name: 'ANGULAR', percentage: 65 },
    { name: 'REACT', percentage: 45 },
  ];

  return (
    <div className="min-h-screen text-white py-12 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">MY SKILLS</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  fill="none"
                  stroke="#4B5563"
                  strokeWidth="10"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="10"
                  strokeDasharray={283} // Circumference of circle (2 * π * r)
                  strokeDashoffset={283 - (283 * skill.percentage) / 100}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold">{skill.percentage}%</span>
              </div>
            </div>
            <p className="mt-4 text-lg uppercase">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;