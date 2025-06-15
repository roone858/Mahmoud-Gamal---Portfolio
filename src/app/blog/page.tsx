"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaUser } from "react-icons/fa";
import Header from "@/Components/Header";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const Blogs: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      excerpt:
        "Explore how AI is transforming industries and what to expect in the coming years with advancements in machine learning and neural networks.",
      author: "Mahmoud Gamal",
      date: "June 05, 2025",
      image: "/imgs/ai-future.jpg",
      slug: "future-of-ai-2025",
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs",
      excerpt:
        "Discover the latest breakthroughs in quantum computing and their potential to revolutionize data processing and cryptography.",
      author: "Sarah Ahmed",
      date: "June 04, 2025",
      image: "/imgs/quantum-computing.jpg",
      slug: "quantum-computing-breakthroughs",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing",
      excerpt:
        "Learn how edge computing is reducing latency and enhancing security in IoT devices and real-time applications.",
      author: "Ali Khaled",
      date: "June 03, 2025",
      image: "/imgs/edge-computing.jpg",
      slug: "rise-of-edge-computing",
    },
    {
      id: 4,
      title: "Cybersecurity Trends to Watch in 2025",
      excerpt:
        "Stay ahead with the latest cybersecurity trends, including AI-driven threats and advanced defense mechanisms.",
      author: "Fatima El-Sayed",
      date: "June 02, 2025",
      image: "/imgs/cybersecurity-trends.jpg",
      slug: "cybersecurity-trends-2025",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-background text-white py-12 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <Header subtitle="my" title="POSTS" goldenrod="blogs" />
      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: post.id * 0.1 }}
          >
            <div className="relative h-48 overflow-hidden border-b-5 border-goldenrod">
              {/* <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-4">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
                <FaClock className="ml-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <a
                href={`/blogs/${post.slug}`}
                className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors text-sm sm:text-base font-medium"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
