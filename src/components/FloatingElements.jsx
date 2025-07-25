import React from 'react';

const SNOWFLAKE_COUNT = 24; // Adjust for more/less snowflakes

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {[...Array(SNOWFLAKE_COUNT)].map((_, i) => {
        const left = Math.random() * 100;
        const size = 4 + Math.random() * 6; // Smaller on mobile
        const delay = Math.random() * 6;
        const duration = 8 + Math.random() * 8;
        const opacity = 0.3 + Math.random() * 0.4; // Slightly less opacity on mobile

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-snow"
            style={{
              left: `${left}%`,
              top: '-5%',
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes snow {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(60vh) translateX(10px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(-10px);
            opacity: 0.2;
          }
        }
        .animate-snow {
          animation: snow linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;