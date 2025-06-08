// src/app/(main)/about/page.tsx
import React from 'react'
// import Image from 'next/image'
// import profileImage from '@/assets/images/main.png'
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
    { label: 'Address', value: ' Egypt' },
    { label: 'Email', value: 'mahmoudg.dev@gmail.com' },
    { label: 'Zip code', value: '000000' },
    { label: 'Phone', value: '011 4019 2314' },
  ]

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto">
      <Header title="about" subtitle="about me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     {/*   <div className="flex items-center justify-center">
           <Image 
            src={profileImage} 
            alt="Profile" 
            width={400}
            height={400}
            className="w-full max-w-xs rounded-full" 
          /> 
        </div>*/}
        
        <div>
     
          
          <div className="w-full mb-6">
            <ul>
              {aboutItems.map((item, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span className="text-gray-300 font-semibold">{item.label} : </span>
                  <span className="text-white ">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
   
          
        <Button icon={faDownload} text="download cv" />
        </div>
        <div className="grid grid-cols-2 gap-6 text-left">
          <div className="border border-gray-800 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-4xl text-yellow font-bold">4+</h3>
            <p className="text-sm text-left pl-12 uppercase">Years of Experience</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-4xl  text-yellow font-bold">12+</h3>
            <p className="text-sm text-left pl-12 uppercase">Completed Projects</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-4xl text-yellow font-bold">81+</h3>
            <p className="text-sm text-left pl-12 uppercase">Happy Customers</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-4xl text-yellow font-bold">53+</h3>
            <p className="text-sm text-left pl-12 uppercase">repositories complete</p>
          </div>
        </div>
      </div>
      <Skills />
      <ExperienceEducation />
    </section>
  )
}

export default About