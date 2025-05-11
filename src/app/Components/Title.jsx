"use client";
import { useEffect, useState, useRef } from 'react';
import Button from '../Components/Button';
import SocialMediaIcons from '../Components/socialMediaIcon';
import { AiOutlineMail, AiOutlineDownload, AiOutlineGlobal } from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';

export default function DeveloperIntro() {
  const greeting = "Hello, World! 👋";
  const nameIntro = "I'm Zakariae Zemat";
  const roles = ["Software Engineer", "Web Developer"];
  const [currentRole, setCurrentRole] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle typing animation
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let typingForward = true;
    let pauseCounter = 0;
    const pauseDuration = 20; // How long to pause at the end of a word

    const typeInterval = setInterval(() => {
      if (typingForward) {
        setCurrentRole(roles[index].slice(0, charIndex));
        charIndex++;
        
        // If we've completed typing the current role
        if (charIndex > roles[index].length) {
          // Pause before starting to delete
          if (pauseCounter < pauseDuration) {
            pauseCounter++;
            return;
          }
          pauseCounter = 0;
          typingForward = false;
        }
      } else {
        setCurrentRole(roles[index].slice(0, charIndex));
        charIndex--;
        
        // If we've completely deleted the current role
        if (charIndex === 0) {
          // Move to the next role
          typingForward = true;
          index = (index + 1) % roles.length;
        }
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const downloadCV = (language) => {
    const fileName = language === 'english' ? 'ZakariaeZemat_CV_EN.pdf' : 'ZakariaeZemat_CV_FR.pdf';
    const filePath = language === 'english' ? '/Zakariae Zemat.pdf' : '/ZEMAT Zakariae (2).pdf';
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
    
    setDropdownOpen(false);
  };

  const contactMe = () => {
    window.location.href = '#contact';
  };

  return (
    <div className="min-h-[80vh] overflow-hidden flex flex-col items-start justify-center px-4 text-left">
      {/* Greeting with subtle animation */}
      <h2 className="text-gray-300 text-2xl mb-6 ml-2 animate-fadeIn">{greeting}</h2>
      
      {/* Name with subtle animation */}
      <h1 className="font-bold text-6xl md:text-6xl text-white mb-4 animate-slideIn">
        {nameIntro}
      </h1>
      
      {/* Role with typing effect */}
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent min-h-[50px]">
        {currentRole}
        <span className="text-cyan-400 animate-pulse">{cursorVisible ? '|' : ''}</span>
      </h2>
      
      {/* Tagline */}
      <p className="mt-4 text-xl italic text-gray-200">
        "Turning caffeine into clean code."
      </p>
      
      {/* Description with subtle animation */}
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl animate-fadeInUp">
        My work blends technology and creativity. Whether coding intuitive websites or orchestrating successful projects, I ensure innovation meets practicality every step of the way.
      </p>

      {/* Buttons Section */}
      <div className="mt-8 flex gap-6">
        {/* CV Download Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <Button
            icon={AiOutlineDownload}
            text="Download CV"
            onClick={toggleDropdown}
            showLoading={false}
            color="bg-blue-600"
            customClasses="inline-flex items-center"
          >
            <HiChevronDown className="ml-2 -mr-1 h-5 w-5" />
          </Button>
          
          {/* Language Selection Dropdown */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10 animate-fadeIn">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <button
                  onClick={() => downloadCV('english')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white flex items-center"
                  role="menuitem"
                >
                  <span className="inline-block w-5 h-5 mr-2">🇬🇧</span> English
                </button>
                <button
                  onClick={() => downloadCV('french')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white flex items-center"
                  role="menuitem"
                >
                  <span className="inline-block w-5 h-5 mr-2">🇫🇷</span> French
                </button>
              </div>
            </div>
          )}
        </div>

        <Button
          icon={AiOutlineMail}
          text="Contact Me"
          onClick={contactMe}
          color=""
        />
      </div>
      
      {/* You can add SocialMediaIcons here if needed */}
    </div>
  );
}