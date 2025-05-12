"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function StarshipNavbar() {
  const [activeSection, setActiveSection] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#aboutme', label: 'AboutMe' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experiences', label: 'Experiences' },
  ];

  // Menu toggle animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-0 right-0 mx-auto flex justify-center z-40">
        <motion.div 
          className="bg-black bg-opacity-80 backdrop-blur-md border border-indigo-700 shadow-2xl rounded-full px-6 md:px-10 py-3 hidden md:flex items-center space-x-6 md:space-x-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <motion.div
            className="text-indigo-400 text-2xl md:text-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <FaCode />
          </motion.div>

          <div className="flex items-center p-1 space-x-6 md:space-x-12">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => handleLinkClick(link.href)}>
                <motion.div
                  className={`relative flex items-center space-x-2 text-white cursor-pointer text-base md:text-lg
                  ${activeSection === link.href
                    ? 'text-indigo-400' // Highlight when active
                    : 'opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.1, textShadow: '0 0 8px #00ffff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-mono text-xs md:text-sm">{`</${link.label}>`}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-0 right-0 mx-auto flex md:hidden items-center justify-center px-4 z-40">
        <motion.div
          className="bg-black bg-opacity-80 backdrop-blur-md border border-indigo-700 shadow-2xl rounded-full px-4 py-2 flex items-center justify-between w-full max-w-sm"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Mobile Logo */}
          <motion.div
            className="text-indigo-400 text-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <FaCode />
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <motion.button
            className="text-white text-xl p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          className={`absolute top-16 left-0 right-0 mx-auto bg-black bg-opacity-90 backdrop-blur-md border border-indigo-700 shadow-2xl rounded-lg max-w-sm w-[92%] py-4 flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={itemVariants}
              className="w-full"
            >
              <Link href={link.href} onClick={() => handleLinkClick(link.href)}>
                <motion.div
                  className={`relative flex items-center justify-center py-3 text-white cursor-pointer text-lg
                  ${activeSection === link.href
                    ? 'text-indigo-400 bg-indigo-900 bg-opacity-30' // Highlight when active
                    : 'opacity-70 hover:opacity-100 hover:bg-indigo-900 hover:bg-opacity-20'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-mono text-sm">{`</${link.label}>`}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </>
  );
}