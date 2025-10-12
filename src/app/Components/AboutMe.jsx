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
              I'm Zakariae Zemat, a Software Engineer with a focus on full-stack web development and a strong interest in building scalable SaaS products. I enjoy translating ideas into clean, functional code and crafting intuitive user experiences. I'm currently expanding my skills into DevOps and beginning to explore MLOps, aiming to understand how to streamline deployment workflows and integrate machine learning into real-world applications. I'm driven by curiosity, continuous learning, and the challenge of turning complex problems into practical solutions.

          <br />
          <br />
          <em>Outside of work, I enjoy playing football, watching films and series and listening to podcasts. I'm also a keen follower of football leagues and matches.</em>
        </p>

        {/* Key Facts */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-400" /> <span className="font-bold">Based in:</span> Morocco
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-400" /> <span className="font-bold">Email:</span> zakariaezemat@gmail.com
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
