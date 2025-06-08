// src/app/(main)/about/page.tsx
import React from 'react'
import Header from '@/components/Header'
import Skills from '@/components/Skills';
import ExperienceEducation from '@/components/ExperienceEducation';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from '@/components/Button';

interface AboutItem {
  label: string;
  value: string;
}

const About = () => {
  const aboutItems: AboutItem[] = [
    { label: 'Name', value: 'Mahmoud Gamal' },
    { label: 'Date of Birth', value: 'January 01, 1999' },
    { label: 'Address', value: 'Egypt' },
    { label: 'Email', value: 'mahmoudg.dev@gmail.com' },
    { label: 'Zip code', value: '000000' },
    { label: 'Phone', value: '011 4019 2314' },
  ];

  const stats = [
    { value: "4+", label: "Years of Experience" },
    { value: "12+", label: "Completed Projects" },
    { value: "81+", label: "Happy Customers" },
    { value: "53+", label: "Repositories Complete" }
  ];

  return (
    <section className="py-8 pb-24 mx-auto px-4 sm:px-6 lg:px-8">
      <Header title="about" subtitle="about me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Personal Info Section */}
        <div className="space-y-6">
          <div className="bg-charcoal backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg">
            <ul className="space-y-3">
              {aboutItems.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row justify-between py-2">
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    {item.label}:
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Button 
              icon={faDownload} 
              text="Download CV" 
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-charcoal backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 shadow-lg hover:border-yellow-400 transition-colors duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 mx-4 sm:mx-20">
        <hr className="border-t border-white/25" />
      </div>

      {/* Skills & Experience Sections */}
      <div className="space-y-12">
        <Skills />
        <div className="my-12 mx-4 sm:mx-20">
          <hr className="border-t border-white/25" />
        </div>
        <ExperienceEducation />
      </div>
    </section>
  );
};

export default About;