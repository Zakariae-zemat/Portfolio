"use client";
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialIcons = [
  { icon: <FaFacebookF />, link: 'https://facebook.com' },
  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/zemat-zakariae-9bb220288/' },
  { icon: <FaGithub />, link: 'https://github.com/Zakariae-zemat' },
  { icon: <FaInstagram />, link: 'https://instagram.com' },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-2 border border-gray-500 rounded-lg p-2 bg-indigo-950 shadow-md">
      {socialIcons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-white rounded-full hover:bg-indigo-600 transition-all"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 1.1 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
