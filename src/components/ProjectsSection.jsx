import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X, Figma } from 'lucide-react';

const projects = [
  {
    title: 'Pizzahub Mobile App',
    description:
      'Designed a user-friendly mobile app for pizza ordering with intuitive navigation and seamless checkout experience. Created wireframes, prototypes, and high-fidelity mockups focusing on modern UI patterns and accessibility. Implemented responsive design principles for optimal mobile experience across different screen sizes.',
    technologies: ['Figma', 'Prototyping', 'UI/UX Design', 'Mobile Design'],
    figmaUrl: 'https://www.figma.com/proto/kO7N1GILrxSeTS71O965Ew/Pizza-mobile-app?node-id=1-78&t=PyQoz0W604L2snkB-1',
    images: ['/p2.png', '/p3.png', '/p4.png', '/p5.png', '/p6.png', '/p7.png'],
  },
  {
    title: 'Task Management App',
    description:
      'Crafted a comprehensive task management application with focus on productivity and user workflow optimization. Designed clean interfaces for task creation, categorization, and progress tracking. Emphasized information hierarchy and visual feedback to enhance user engagement and task completion rates.',
    technologies: ['Figma', 'Wireframing', 'Interactive Prototypes', 'Material Design'],
    figmaUrl: 'https://www.figma.com/proto/EStH8BLIUs8vS7aFSnQNOH/Task-management-mobile-app?node-id=1-2&t=NNZaLJPpHX25xh9F-1',
    images: ['/t1.png', '/t2.png', '/t3.png', '/t4.png', '/t5.png', '/t6.png'],
  },
  {
    title: 'Wonderlust lanka Website',
    description:
      'Designed a captivating travel and tourism website showcasing Sri Lanka\'s natural beauty and cultural heritage. Created engaging landing pages, interactive galleries, and booking interfaces. Focused on visual storytelling through imagery and typography while maintaining fast loading times and mobile responsiveness.',
    technologies: ['Web Design', 'Responsive Design', 'Visual Design'],
    figmaUrl: 'https://www.figma.com/proto/pvYETZrQPkrC1rFBrDCOQD/Untitled?node-id=1-2&p=f&t=4EOoG2fcnOjWTinX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    images: ['/w1.png', '/w2.png', '/w3.png', '/w4.png', '/w5.png', '/w6.png', '/w7.png'],
  },
  {
    title: 'GameSphere Website',
    description:
      'Developed a modern e-commerce platform for digital game sales with emphasis on user experience and conversion optimization. Designed product showcase pages, user profiles, and secure checkout flows. Incorporated gaming aesthetics while maintaining professional standards and accessibility guidelines.',
    technologies: ['E-commerce UX', 'Conversion Design', 'Gaming UI'],
    figmaUrl: 'https://www.figma.com/proto/RH6RZx2GadDKsewAMSYX1g/Untitled?t=mSegAwqUcAPAbqUi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=3-907',
    images: ['/g1.png', '/g2.png', '/g3.png', '/g4.png', '/g5.png', '/g6.png'],
  },
];

const ProjectsSection = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.reduce((acc, project) => {
      acc[project.title] = 0;
      return acc;
    }, {})
  );

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handlePrevImage = (title) => {
    setCurrentImageIndexes((prev) => {
      const project = projects.find((p) => p.title === title);
      const newIndex = (prev[title] - 1 + project.images.length) % project.images.length;
      return { ...prev, [title]: newIndex };
    });
  };

  const handleNextImage = (title) => {
    setCurrentImageIndexes((prev) => {
      const project = projects.find((p) => p.title === title);
      const newIndex = (prev[title] + 1) % project.images.length;
      return { ...prev, [title]: newIndex };
    });
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 bg-gradient text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Featured <span className="text-blue-500">UI/UX Projects</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Explore my UI/UX design portfolio showcasing user-centered solutions across mobile apps, web platforms, and digital experiences. Each project demonstrates my commitment to creating intuitive and visually compelling interfaces.
        </p>
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {projects.map(({ title, description, technologies, figmaUrl, images }) => {
          const currentIndex = currentImageIndexes[title];
          const currentImage = images[currentIndex];

          return (
            <div key={title} className="bg-[#111827] rounded-xl overflow-hidden shadow-md border border-slate-700 transition-all">
              <div className="relative">
                <img
                  src={currentImage}
                  alt={`${title} image ${currentIndex + 1}`}
                  className="w-full h-80 sm:h-96 object-cover cursor-pointer select-none"
                  loading="lazy"
                  onClick={() => setFullscreenImage(currentImage)}
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrevImage(title)}
                      className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75 focus:outline-none transition-all"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => handleNextImage(title)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75 focus:outline-none transition-all"
                      aria-label="Next Image"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-sm px-3 py-2 rounded text-white select-none">
                      {currentIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-8 text-left">
                <div className="flex flex-wrap gap-2 text-xs mb-4 sm:mb-6">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 text-blue-300 px-3 py-2 rounded-full font-medium whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-slate-400 text-base sm:text-lg mb-6 leading-relaxed whitespace-pre-line">{description}</p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href={figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 hover:underline transition-colors"
                  >
                    <Figma className="text-lg" />
                    View on Figma
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 sm:mt-20 text-center">
        <a
          href="https://www.figma.com/files/team/1335895733068283595/recents-and-sharing?fuid=1335895730934275912" // 🔁 Update with your actual Figma profile
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium shadow-md transition"
        >
          View Full Figma Home Page →
        </a>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen Project"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
