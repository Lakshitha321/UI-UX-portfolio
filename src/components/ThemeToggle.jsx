import React, { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return null; // No toggle needed since only dark mode
};

export default ThemeToggle;