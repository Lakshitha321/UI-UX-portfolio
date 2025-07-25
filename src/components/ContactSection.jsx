import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0d0d14] to-[#111] dark:bg-slate-900 px-4 sm:px-6 text-slate-800 dark:text-slate-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 border-b-4 border-blue-600 inline-block pb-2">
          Get In Touch
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-xl mx-auto px-4">
          I'm open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        {/* Contact Info - Stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-8 sm:mb-12">
          <div className="flex flex-col items-center">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-2" />
            <p className="text-sm sm:text-base break-all">kmclakshitha@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-2" />
            <p className="text-sm sm:text-base">@chamidu-lakshitha</p>
          </div>
          <div className="flex flex-col items-center">
            <Github className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-2" />
            <p className="text-sm sm:text-base">@Lakshitha321</p>
          </div>
        </div>
        
        {/* Action Buttons - Stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="mailto:kmclakshitha@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/chamidu-lakshitha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Lakshitha321"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-black text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;