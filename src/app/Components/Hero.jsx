"use client";
import React from 'react';
import StarshipNavbar from '../Components/NavBar';
import DeveloperIntro from '../Components/Title';
import ProfilePicture from '../Components/ProfilePicture';

const Hero = () => {
  return (
    <div id="hero" className="text-white min-h-screen py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      <StarshipNavbar />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-24 mt-16">
        {/* Title section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <DeveloperIntro />
        </div>

        {/* Profile picture below title on mobile */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-[450px] w-full">
            <ProfilePicture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
