import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // When the component mounts, check the localStorage to see if dark mode was saved
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark'); // Add dark mode class to <html>
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem('darkMode', !isDark); // Save the mode in localStorage
    if (!isDark) {
      document.documentElement.classList.add('dark'); // Add dark mode class to <html>
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode class from <html>
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 m-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
