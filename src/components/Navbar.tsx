// src/components/Navbar.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import logo from '@/assets/images/main.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'resume', path: '/resume' },
    { name: 'services', path: '/services' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ]

  return (
    <nav className="relative top-0 w-full bg-nero text-base uppercase z-50">
      <div className="w-[85vw] mx-auto flex justify-between items-center py-2 overflow-hidden">
        <div className="flex items-center">
          {/* <Image
            src={logo}
            width={50}
            height={50}
            className="block rounded-full m-0.5"
            alt="Profile photo"
          /> */}
          <Link href="/" className="logo font-poppins text-xl font-extrabold uppercase">
            rooney
          </Link>
        </div>
        
        <button 
          className="md:hidden flex flex-col justify-between h-5 w-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-nero md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row items-center py-4 md:py-0">
            {navLinks.map((link) => (
              <li key={link.name} className="px-2 py-2 md:py-0 mx-2 relative group">
                <Link 
                  href={link.path}
                  className={`${pathname === link.path ? 'text-red' : 'text-white'} font-medium hover:text-red transition-colors`}
                >
                  {link.name}
                </Link>
                <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-red rounded-full w-0 group-hover:w-full transition-all duration-300 ${pathname === link.path ? 'w-full' : ''}`}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar