import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'UI/UX Engineer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0d0d14] to-[#111] text-white relative overflow-hidden px-4 sm:px-6 lg:px-10 py-16 sm:py-20 flex items-center">
      {/* Content */}
      <div className="z-10 relative max-w-full lg:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          {typedText}
          <span className="blinking-cursor text-blue-500">|</span>
        </h1>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-full lg:max-w-xl">
           I specialize in crafting intuitive and engaging user experiences while implementing high-quality, pixel-perfect user interfaces. My expertise bridges the gap between design vision and technical execution, ensuring seamless and responsive digital products. I'm passionate about solving real-world problems through a combination of thoughtful design, efficient front-end development, and continuous learning.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Passionate about solving real-world problems through clean designs, innovation, and continuous learning.
          </p>
        </div>
      </div>

      {/* Background Image - Full screen on mobile, right side on desktop */}
      <div className="absolute top-0 left-0 w-full h-full lg:left-auto lg:right-0 lg:w-1/2 pointer-events-none select-none">
        <img
          src="/web.png"
          alt="Profile Visual"
          className="object-cover h-full w-full opacity-30 lg:opacity-80 grayscale mix-blend-screen"
        />
      </div>

      {/* Background Overlay - Stronger on mobile for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-slate-800/50 to-black/80 lg:from-indigo-900/40 lg:via-slate-800/30 lg:to-black/70 z-0" />

      {/* Cursor Animation */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;