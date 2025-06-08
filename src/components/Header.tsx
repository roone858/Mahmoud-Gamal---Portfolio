// src/components/Header.tsx
import React from 'react'

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative w-full h-25 mt-12">
      <h2 className="absolute text-8xl text-[#252424]  uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h2>
      <h1 className="relative  text-5xl text-center text-white uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {subtitle}  
      </h1>
    </div>
  )
}

export default Header