"use client";
import React, { useEffect, useState } from 'react';
import StarshipNavbar from '../Components/NavBar';
import DeveloperIntro from '../Components/Title';
import ProfilePicture from '../Components/ProfilePicture';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure animation starts after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className="text-white min-h-screen py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* NavBar with animation */}
      <div className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <StarshipNavbar />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-24 mt-16">
        {/* Title section with animation */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <DeveloperIntro />
        </div>

        {/* Profile picture with animation */}
        <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-[450px] w-full">
            <ProfilePicture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;