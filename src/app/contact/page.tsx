"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Button from "@/Components/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Header from "@/Components/Header";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className=" py-12  max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 ">
      {/* Header with animations */}
      <Header title="contact" subtitle="get in" goldenrod="touch" />

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 ">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl uppercase font-medium mb-6 text-white">
            Feel free to ask me!
          </h3>
          <p className="text-white mb-8 text-sm sm:text-base">
            {` I'm passionate about creating digital experiences and solving problems. 
            If you have a project in mind or just want to connect, don't hesitate to reach out.`}
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-charcoal p-3 rounded-full mr-4">
                <FaEnvelope className="text-yellow-400 text-xl" />
              </div>
              <div>
                <label className="block uppercase  text-sm text-white/75 mb-1">
                  mail me
                </label>
                <a
                  href="mailto:mahmoudg.dev@gmail.com"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  mahmoudg.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-charcoal p-3 rounded-full mr-4">
                <FaPhone className="text-yellow-400 text-xl" />
              </div>
              <div>
                <label className="block uppercase  text-sm text-white/75 mb-1">
                  call me
                </label>
                <a
                  href="tel:01140192314"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  +20 114 019 2314
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-white uppercase  text-sm mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/mah.moud.1675275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-yellow-400 text-xl transition-colors bg-charcoal rounded-full p-3"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-gamal-55a933166/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-yellow-400 text-xl transition-colors bg-charcoal rounded-full p-3"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-yellow-400 text-xl transition-colors bg-charcoal rounded-full p-3"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://wa.me/201140192314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-yellow-400 text-xl transition-colors bg-charcoal rounded-full p-3"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-charcoal  rounded-full px-6 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-charcoal  rounded-full px-6 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-charcoal  rounded-full px-6 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="w-full bg-charcoal  rounded-3xl px-6 py-3 text-white  focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all"
                required
              />
            </div>

            <Button icon={faPaperPlane} text={`${isSubmitting ? "Sending..." : "Send Message"}`} />
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 bg-green-500/10 border border-green-500 rounded-xl p-4 flex items-start gap-3"
              >
                <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">
                    Thank you for your message!
                  </p>
                  <p className="text-green-300 text-sm">{`I'll get back to you as soon as possible.`}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
