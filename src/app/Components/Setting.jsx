"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';
import { FiSun, FiMoon, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function SettingsTree() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    clicked: { rotate: 360, scale: 1.2 },
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Settings Icon */}
      <motion.div
        className="relative flex items-center p-2 space-x-2 text-white cursor-pointer text-lg opacity-70 hover:opacity-100"
        onClick={() => setSettingsOpen(!settingsOpen)}
        variants={iconVariants}
        initial="initial"
        animate={settingsOpen ? "clicked" : "initial"}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCogs />
      </motion.div>

      {/* Settings Tree */}
      {settingsOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-8 left-0 bg-black bg-opacity-90 border border-indigo-700 rounded-md p-2 flex flex-col space-y-2 shadow-md"
        >
          <motion.div
            className="cursor-pointer p-2 text-white opacity-70 hover:opacity-100"
            variants={iconVariants}
            initial="initial"
            whileTap="clicked"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.div>

          <motion.div
            className="cursor-pointer p-2 text-white opacity-70 hover:opacity-100"
            variants={iconVariants}
            initial="initial"
            whileTap="clicked"
            onClick={toggleSound}
          >
            {soundOn ? <FiVolume2 /> : <FiVolumeX />}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
