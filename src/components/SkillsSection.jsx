import React from 'react';

const skills = [
  { name: 'Figma', level: 95 },
  { name: 'Wireframing', level: 90 },
  { name: 'User Research & Testing', level: 90 },
  { name: 'Prototyping', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Responsive Design', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Git/GitHub', level: 90 },
  { name: 'React', level: 90 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Bootstrap', level: 90 }
];

const SkillsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0d0d14] to-[#111] text-white px-4 sm:px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-slate-400 text-sm sm:text-base">Technologies I've worked with</p>
        </div>

        {/* Grid of skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#111] rounded-xl shadow-md p-4 sm:p-5 hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex justify-between mb-2 text-sm font-semibold">
                <span className="text-white truncate pr-2">{skill.name}</span>
                <span className="text-slate-400 flex-shrink-0">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;