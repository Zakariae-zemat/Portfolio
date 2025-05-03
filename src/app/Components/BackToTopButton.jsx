"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 cursor-pointer p-4 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 text-white shadow-lg ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } transition-all duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-2xl" />
    </div>
  );
}
