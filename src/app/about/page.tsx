// src/app/(main)/about/page.tsx
import React from 'react'
// import Image from 'next/image'
// import profileImage from '@/assets/images/main.png'
import Header from '@/components/Header'

interface AboutItem {
  label: string;
  value: string;
}

const About = () => {
  const aboutItems: AboutItem[] = [
    { label: 'Name', value: 'Mahmoud Gamal' },
    { label: 'Date of Birth', value: 'January 01, 1999' },
    { label: 'Address', value: 'Asyut , Asyut , Egypt' },
    { label: 'Email', value: 'mahmoudg.dev@gmail.com' },
    { label: 'Zip code', value: '000000' },
    { label: 'Phone', value: '011 4019 2314' },
  ]

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <Header title="about" subtitle="about me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          {/* <Image 
            src={profileImage} 
            alt="Profile" 
            width={400}
            height={400}
            className="w-full max-w-xs rounded-full" 
          /> */}
        </div>
        
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
           {` Student in computer programming with a background in Java application, Python, C++, 
            Js, HTML, CSS, MySQL, and databases. Proficiency with algorithms and data structures 
            in C++ and Python. Experience working on many projects. I'm a MERN stack developer 
            with expertise in MongoDB, Express.js, React.js, and Node.js.`}
          </p>
          
          <div className="w-full mb-6">
            <ul>
              {aboutItems.map((item, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span className="text-white font-semibold">{item.label} : </span>
                  <span className="text-gray-300">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <h3 className="text-red text-2xl mb-6 uppercase font-poppins">
            33 <span className="text-white">repositories complete</span>
          </h3>
          
          <a href="/cv.pdf" download className="uppercase rounded-full px-6 py-3 text-base bg-red text-white border-2 border-black font-poppins transition-all hover:-translate-y-1 hover:translate-x-1 inline-block">
            download cv
          </a>
        </div>
      </div>
    </section>
  )
}

export default About