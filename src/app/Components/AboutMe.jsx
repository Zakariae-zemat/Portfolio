"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaHandshake } from 'react-icons/fa';
import SocialMediaIcons from '../Components/socialMediaIcon';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  return (
    <div id='aboutme'
      ref={ref}
      className="text-white px-10 py-2 overflow-hidden md:px-32 flex flex-col items-center text-center"
    >
      <motion.div
        className="space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m Zakariae Zemat, a passionate Software Engineer dedicated to solving problems through code. I thrive on blending technology with creativity, turning innovative ideas into functional solutions. Whether I’m crafting intuitive web applications or refining user experiences, I’m constantly pushing myself to deliver impactful results. 
          <br />
          <br />
          <em>In my free time, I enjoy watching series, movies, and podcasts, as well as following football games.</em>
        </p>

        {/* Key Facts */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-400" /> <span className="font-bold">Based in:</span> Morocco
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-400" /> <span className="font-bold">Email:</span> zakariae@example.com
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-indigo-400" /> <span className="font-bold">Languages:</span> English, Arabic, French
          </div>
        </div>

        {/* Social Media Component */}
        <motion.div
          className="mt-6 w-fit mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <SocialMediaIcons className="text-xl" />
        </motion.div>
      </motion.div>
      <div className="mt-16 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
    </div>
  );
};

export default AboutMe;
