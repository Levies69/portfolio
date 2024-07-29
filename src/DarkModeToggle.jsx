// DarkModeToggle.jsx

import React from 'react';
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 rounded-full p-2 w-12 h-12 flex items-center justify-center z-50"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        className="text-gray-700 dark:text-gray-300 text-2xl"
      />
    </button>
  );
};

export default DarkModeToggle;
