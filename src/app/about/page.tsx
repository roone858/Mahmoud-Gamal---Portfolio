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
  ]

  return (
    <section className="py-8 pb-24 mx-auto px-4 max-w-7xl">
      <Header title="about" subtitle="about me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <div className="w-full mb-6">
            <ul>
              {aboutItems.map((item, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span className="text-gray-300 font-semibold">{item.label} : </span>
                  <span className="text-white">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button icon={faDownload} text="download cv" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="border border-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl sm:text-4xl text-yellow font-bold">4+</h3>
            <p className="text-xs sm:text-sm pl-8 sm:pl-12 uppercase">Years of Experience</p>
          </div>
          <div className="border border-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl sm:text-4xl text-yellow font-bold">12+</h3>
            <p className="text-xs sm:text-sm pl-8 sm:pl-12 uppercase">Completed Projects</p>
          </div>
          <div className="border border-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl sm:text-4xl text-yellow font-bold">81+</h3>
            <p className="text-xs sm:text-sm pl-8 sm:pl-12 uppercase">Happy Customers</p>
          </div>
          <div className="border border-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl sm:text-4xl text-yellow font-bold">53+</h3>
            <p className="text-xs sm:text-sm pl-8 sm:pl-12 uppercase">repositories complete</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-800 mx-10 mt-1"></hr>
      <Skills />
      <hr className="text-gray-800  mx-10 mt-1"></hr>
      <ExperienceEducation />
    </section>
  )
}

export default About