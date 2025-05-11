"use client";
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Circle animation */}
          <div className="absolute inset-0 border-4 border-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute inset-0 border-t-4 border-indigo-300 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-medium text-white tracking-wider">
          <span className="inline-block animate-pulse">L</span>
          <span className="inline-block animate-pulse delay-75">o</span>
          <span className="inline-block animate-pulse delay-150">a</span>
          <span className="inline-block animate-pulse delay-200">d</span>
          <span className="inline-block animate-pulse delay-300">i</span>
          <span className="inline-block animate-pulse delay-400">n</span>
          <span className="inline-block animate-pulse delay-500">g</span>
          <span className="inline-block animate-pulse delay-600">.</span>
          <span className="inline-block animate-pulse delay-700">.</span>
          <span className="inline-block animate-pulse delay-800">.</span>
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;