// src/components/Footer.tsx
import React from 'react'
import Link from 'next/link'

const Footer = () => {
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
    <footer className="py-8 border-t-2 border-nero bg-nero w-full overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto flex flex-col items-center gap-5">
        <h2 className="text-xl font-poppins font-bold">Mahmoud Gamal</h2>
        <p className="text-center text-gray-300">
          &quot;Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work. And
          the only way to do great work is to love what you do. If you haven&apos;t
          found it yet, keep looking. Don&apos;t settle. As with all matters of the
          heart, you&apos;ll know when you find it.&quot; <br />
          Steve Jobs
        </p>
        
        <div className="flex justify-center gap-10">
          <a 
            href="https://www.facebook.com/mah.moud.1675275" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red text-3xl transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/mahmoud-gamal-55a933166/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red text-3xl transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red text-3xl transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a 
            href="https://wa.me/201140192314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red text-3xl transition-all hover:scale-110"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        
        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.path}
                className="text-white border border-white rounded-full px-3 py-1 text-sm uppercase hover:bg-red hover:border-red transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <p className="text-center uppercase bg-black py-2 mt-8">
        created by : ROONEY
      </p>
    </footer>
  )
}

export default Footer