import React from 'react';
// Import the CSS file

const AnimatedCircle = () => {
  return (
    <div className="circle-container">
      <svg width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#ff7f7f" />
            <stop offset="50%" stopColor="#ff3f3f" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedCircle;
