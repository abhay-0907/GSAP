// components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  
   const [theme, setTheme] = useState(() => {
     const saved = localStorage.getItem('theme');
     if (saved) return saved;
     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
   });
 
   useEffect(() => {
     const root = document.documentElement;
     if (theme === 'dark') {
       root.classList.add('dark');
     } else {
       root.classList.remove('dark');
     }
     localStorage.setItem('theme', theme);
   }, [theme]);
 

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition'
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
