import React from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'School Management System | PERN STACK',
      category: 'Video',
      image: '/imgs/cms.jpeg'
    },
    {
      id: 2,
      title: 'Egypt Future Work | static website',
      category: 'Video',
      image: '/imgs/Egypt.jpeg'
    },
    {
      id: 3,
      title: 'Recipe Finder | React.js, API integration',
      category: 'Video',
      image: '/imgs/recipe-finder.jpeg'
    },
    {
      id: 4,
      title: 'Search Country project',
      category: 'Video',
      image: '/imgs/wcl.JPG'
    },
    {
      id: 5,
      title: 'Most countries Project',
      category: 'Video',
      image: '/imgs/wcd.JPG'
    }
  ];

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <div className="relative w-full h-25 mb-12">
        <h2 className="absolute text-6xl uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          projects
        </h2>
        <h1 className="relative text-4xl text-center uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          my projects
        </h1>
      </div>
      
      <p className="text-gray-300 text-center w-full md:w-3/4 mx-auto mb-12">
        A creative project is a moving target. You never end up where you start.
      </p>
      
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex flex-wrap justify-center -mx-5">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10"
              >
                <div className="bg-gradient-to-br from-nero to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <a href="#" className="text-red hover:underline">
                      {project.category}
                    </a>
                    <div className="flex items-center">
                      <button className="text-gray-400 hover:text-red">
                        <i className="fas fa-heart mr-1"></i>
                        <span>**</span>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-xl text-gray-100 font-medium">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;