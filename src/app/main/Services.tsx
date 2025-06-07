import React from 'react';

interface Service {
  icon: string;
  name: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    { icon: 'fas fa-computer', name: 'Content Management System' },
    { icon: 'far fa-hard-drive', name: 'Frontend Development' },
    { icon: 'fas fa-server', name: 'Backend Development' },
    { icon: 'fas fa-cloud-arrow-up', name: 'Cloud Development' },
    { icon: 'fas fa-shop', name: 'eCommerce Store' },
    { icon: 'fas fa-business-time', name: 'Business Website' },
    { icon: 'fas fa-file-arrow-up', name: 'Single Page Websites' },
    { icon: 'fas fa-award', name: 'Educational Website' },
    { icon: 'fab fa-python', name: 'Python Dynamic Website' }
  ];

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <div className="relative w-full h-25 mb-12">
        <h2 className="absolute text-6xl uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          services
        </h2>
        <h1 className="relative text-4xl text-center uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          our services
        </h1>
      </div>
      
      <p className="text-gray-300 text-center w-full md:w-3/4 mx-auto mb-12">
        it may seem far, far away at first. Your ideas are in uncharted,
        pixelated territory. Our crew will guide you through the discovery,
        design, and build of your idea. Together we will realize your vision.
      </p>
      
      <div className="flex flex-wrap justify-center -mx-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
          >
            <div className="bg-nero text-center py-8 px-4 rounded-lg transition-all hover:bg-red hover:shadow-lg">
              <i className={`${service.icon} text-5xl text-red mb-6 transition-all hover:bg-red hover:text-white`}></i>
              <h2 className="text-base uppercase tracking-wider font-open-sans font-black">
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;