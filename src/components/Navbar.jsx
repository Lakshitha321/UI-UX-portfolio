import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-900 shadow-md border-b border-slate-200 dark:border-slate-700'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 dark:text-blue-400 truncate"
        >
          Chamidu Lakshitha
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-slate-700 dark:text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md bg-slate-200 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-300" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-300" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-4 shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 sm:px-6 text-slate-700 dark:text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="py-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base sm:text-lg border-b border-slate-100 dark:border-slate-800 last:border-b-0"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;