"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <FaEnvelope size={20} />, href: "mailto:your.email@example.com", label: "Email" }
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-cyan-800/30 flex flex-col md:flex-row justify-between items-center"
        >          
          <div className="text-gray-400 mx-auto text-center text-sm">
            <span className='text-center'>Made with ❤️ using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;