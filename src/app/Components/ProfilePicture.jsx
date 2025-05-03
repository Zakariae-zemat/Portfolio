import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="relative inline-block max-w-sm w-full">
      {/* Shadowed image layer */}
      <div className="relative z-10 drop-shadow-[4px_4px_0_rgba(59,130,246,0.4)]">
        <img
          src="/pp.jpeg"
          alt="Profile"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* Background design */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-lg">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundSize: '12px 12px',
              backgroundImage:
                'linear-gradient(to right, rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.4) 1px, transparent 1px)',
            }}
          />
        </div>

        {/* Soft blue overlay */}
        <div className="absolute inset-0 bg-blue-500 opacity-5 mix-blend-soft-light" />

        {/* Clean border */}
        <div className="absolute inset-0 border border-blue-500 opacity-20 rounded-lg" />

        {/* ONLY Top-left sharp accent — clearly visible */}
        <div className="absolute -top-2 -left-2 w-14 h-14 border-t-4 border-l-4 border-blue-900 rounded shadow-md z-30" />
      </div>
    </div>
  );
};

export default ProfilePicture;
