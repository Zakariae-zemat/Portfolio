"use client";
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
