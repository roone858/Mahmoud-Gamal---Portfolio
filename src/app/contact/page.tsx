'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-8 pb-24 w-[85vw] mx-auto bg-black">
      <div className="relative w-full h-25 mb-12">
        <h2 className="absolute text-6xl uppercase text-center text-nero font-poppins font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          contact
        </h2>
        <h1 className="relative text-4xl text-center uppercase font-black font-poppins left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          get in touch
        </h1>
      </div>
      
      <p className="text-gray-300 text-center w-full md:w-3/4 mx-auto mb-12">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <div>
          <h3 className="text-2xl uppercase font-open-sans mb-4">feel free to ask us !</h3>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veniam beatae velit modi doloribus, ut possimus sit voluptatem
            molestias dignissimos quasi.
          </p>
          
          <div className="flex items-start mb-8">
            <i className="fas fa-envelope text-3xl text-red mt-1 mr-4"></i>
            <div>
              <label className="block uppercase font-open-sans text-lg">mail me</label>
              <p className="text-gray-300">mahmoudg.dev@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start mb-8">
            <i className="fas fa-phone text-3xl text-red mt-1 mr-4"></i>
            <div>
              <label className="block uppercase font-open-sans text-lg">call me</label>
              <p className="text-gray-300">01140192314</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com/mah.moud.1675275" className="text-white hover:text-red text-2xl transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-gamal-55a933166/" className="text-white hover:text-red text-2xl transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" className="text-white hover:text-red text-2xl transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://wa.me/201140192314" className="text-white hover:text-red text-2xl transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-nero border-2 border-transparent rounded-full px-4 py-3 text-white placeholder-gray-500 focus:border-red outline-none uppercase font-open-sans"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-nero border-2 border-transparent rounded-full px-4 py-3 text-white placeholder-gray-500 focus:border-red outline-none uppercase font-open-sans"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject"
              className="w-full bg-nero border-2 border-transparent rounded-full px-4 py-3 text-white placeholder-gray-500 focus:border-red outline-none uppercase font-open-sans mb-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="w-full bg-nero border-2 border-transparent rounded-3xl px-4 py-3 text-white placeholder-gray-500 focus:border-red outline-none uppercase font-open-sans mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red text-white rounded-full px-4 py-3 uppercase font-open-sans hover:bg-black hover:border-red hover:border-2 transition-all"
            >
              send message
            </button>
          </form>
          
          {showMessage && (
            <div className="mt-4 border-2 border-green-500 rounded-xl p-4">
              <p className="text-white">
                Thank you for letting us know. I'm here to help, and I'll respond
                as soon as I can. Have a great day
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;