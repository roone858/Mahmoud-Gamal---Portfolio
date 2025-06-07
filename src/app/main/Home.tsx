// src/app/(main)/page.tsx
import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/images/hero.png'

const Home = () => {
  return (
    <section className="py-4 pb-20 w-[85vw] mx-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start justify-center h-[calc(100vh-73px)] font-poppins">
          <h3 className="text-lg text-red uppercase tracking-[5px]">hello!</h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            i'm <span className="text-red">mahmoud gamal</span>
          </h1>
          <h2 className="text-xl uppercase font-extrabold">a freelance software engineer</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full">
            <button className="uppercase rounded-full px-8 py-4 text-base bg-red text-white border-2 border-red font-poppins transition-all hover:-translate-y-1 hover:translate-x-1">
              hire me
            </button>
            <button className="uppercase rounded-full px-8 py-4 text-base bg-transparent text-white border-2 border-red font-poppins transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-red">
              <a
                className="no-underline text-white"
                href="https://www.upwork.com/freelancers/mahmoudgamal109"
                target="_blank"
                rel="noopener noreferrer"
              >
                upWork
              </a>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center h-[calc(100vh-73px)]">
          <div className="relative">
            <Image 
              src={heroImage} 
              alt="Hero" 
              width={500}
              height={500}
              className="transition-all hover:-translate-y-1 hover:-translate-x-1" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home