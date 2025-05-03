"use client";
import { useEffect, useState } from 'react';
import Button from '../Components/Button';
import SocialMediaIcons from '../Components/socialMediaIcon';
import { AiOutlineMail, AiOutlineDownload } from 'react-icons/ai';

export default function DeveloperIntro() {
  const greeting = "Hello, World! 👋";
  const nameIntro = "I'm Zakariae Zemat";
  const roles = ["Software Engineer","Web Developper", "Content Creator"];
  const [currentRole, setCurrentRole] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let typingForward = true;

    const typeInterval = setInterval(() => {
      if (typingForward) {
        setCurrentRole(roles[index].slice(0, charIndex));
        charIndex++;
        if (charIndex > roles[index].length) {
          typingForward = false;
        }
      } else {
        setCurrentRole(roles[index].slice(0, charIndex));
        charIndex--;
        if (charIndex === 0) {
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

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Zakariae-zemat.pdf';
    link.download = 'ZakariaeZematCV.pdf';
    link.click();
  };

  const contactMe = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-[80vh] overflow-hidden flex flex-col items-start justify-center px-4 text-left">
      <h2 className="text-gray-300 text-2xl mb-6 ml-2">{greeting}</h2>
      <h1 className="font-bold text-6xl md:text-6xl text-white mb-4">
        {nameIntro}
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent min-h-[50px]">
        {currentRole}
        <span className="text-cyan-400 animate-pulse">{cursorVisible ? '|' : ''}</span>
      </h2>
      <p className="mt-4 text-xl italic text-gray-200">
        "Turning caffeine into clean code."
      </p>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
        My work blends technology and creativity. Whether coding intuitive websites or orchestrating successful projects, I ensure innovation meets practicality every step of the way.
      </p>

      {/* Buttons Section */}
      <div className="mt-8 flex gap-6">
        <Button
          icon={AiOutlineDownload}
          text="Download CV"
          onClick={downloadCV}
          showLoading={true}
          color="bg-blue-600"
        />
        <Button
          icon={AiOutlineMail}
          text="Contact Me"
          onClick={contactMe}
          color=""
        />
      </div>
    </div>
  );
}
