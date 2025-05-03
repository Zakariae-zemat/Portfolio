"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AiOutlineCheck, 
  AiOutlineClose, 
  AiOutlineLoading3Quarters 
} from 'react-icons/ai';

const Button = ({
  icon: Icon,
  text,
  onClick,
  showLoading = false,
  color = 'bg-neutral-900'
}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleClick = async () => {
    if (!showLoading) return onClick();

    setLoading(true);
    setStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await onClick();
      setStatus('success');
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 2000);
    }
  };

  // Icon Rendering Logic
  const renderIcon = () => {
    if (loading) return <AiOutlineLoading3Quarters className="animate-spin text-gray-400" size={18} />;
    if (status === 'success') return <AiOutlineCheck className="text-green-400" size={18} />;
    if (status === 'error') return <AiOutlineClose className="text-red-400" size={18} />;
    return <Icon size={20} />;
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}  // Zoom-in Effect on Hover
      whileTap={{ scale: 0.95 }}   // Slight Press Effect
      className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full 
                  font-medium text-white ${color} 
                  border border-neutral-700 transition-all 
                  duration-300 shadow-md cursor-pointer overflow-hidden`}
      aria-live="polite"
    >
      {renderIcon()}
      <span className="text-sm text-gray-200">{text}</span>
    </motion.button>
  );
};

export default Button;
