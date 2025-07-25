import React from 'react';
import { FaCode, FaPencilRuler, FaTasks } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient text-white px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Bio */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed order-2 lg:order-1">
            <p className="text-lg sm:text-xl font-semibold text-white">
              Passionate UI/UX Engineer 
            </p>
            <p>
              I bridge the gap between innovative design and technical execution, specializing in the development of responsive, accessible, and high-performance web applications. With a keen eye for user experience, I'm dedicated to translating design visions into pixel-perfect, functional interfaces. I'm passionate about solving real-world challenges by combining thoughtful design principles with modern web technologies, always seeking to learn and push the boundaries of user-centric development.
            </p>
           

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="#contact"
                className="bg-blue-400 hover:bg-blue-800 text-white py-3 px-6 rounded-lg shadow-md transition text-center"
              >
                Get In Touch
              </a>
              <a
                href="/Lakshitha v2.pdf"
                className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-lg shadow-md transition text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {/* Card 1 */}
            <div className="bg-[#111827] p-4 sm:p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition">
              <FaCode className="text-blue-400 text-xl sm:text-2xl mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Web Development</h3>
              <p className="text-slate-400 text-sm">
                Creating responsive websites and web apps using modern frameworks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111827] p-4 sm:p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition">
              <FaPencilRuler className="text-blue-400 text-xl sm:text-2xl mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">UI/UX Design</h3>
              <p className="text-slate-400 text-sm">
                Designing intuitive user interfaces and seamless user experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111827] p-4 sm:p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition sm:col-span-2 lg:col-span-1">
              <FaTasks className="text-blue-400 text-xl sm:text-2xl mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Data Analytics</h3>
              <p className="text-slate-400 text-sm">
               Transforming complex data into actionable insights to drive strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional glowing particle background effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none">
        <div className="stars-pattern w-full h-full" />
      </div>
    </section>
  );
};

export default AboutSection;