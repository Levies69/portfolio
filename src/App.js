import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import DarkModeToggle from './DarkModeToggle'; // Adjust the path as per your project structure
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const { darkMode } = useTheme(); // Retrieve darkMode state from context
  const [content, setContent] = useState('Over Mij'); // Initial state

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className={`bg-gradient-to-b ${darkMode ? 'from-gray-800 to-gray-900' : 'from-blue-900 to-gray-950'}`}>
        {/* Navbar */}
        <div className={`bg-blue-700 text-white p-6 font-bold text-3xl font-sans text-center ${darkMode ? 'dark:bg-gray-900' : ''}`}>
          <Navbar />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-end px-6 py-4">
          <DarkModeToggle />
        </div>

        {/* Social Links */}
        <div className="flex justify-between px-6 py-4">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/levi-kleijnenberg-a27b49242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:underline"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/levi.kleijnenberg/?hl=nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:underline"
          >
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </div>

        {/* Buttons for content selection */}
        <div className='mt-4 flex justify-center flex-wrap'>
          <button
            className={`bg-blue-800 text-white px-4 py-2 m-2 rounded ${darkMode ? 'dark:bg-gray-900' : ''}`}
            onClick={() => setContent('Over Mij')}
          >
            <p className='font-semibold'>Over Mij</p>
          </button>
          <button
            className={`bg-blue-800 text-white px-4 py-2 m-2 rounded ${darkMode ? 'dark:bg-gray-900' : ''}`}
            onClick={() => setContent('Projecten')}
          >
            <p className='font-semibold'>Projecten</p>
          </button>
          <button
            className={`bg-blue-800 text-white px-4 py-2 m-2 rounded ${darkMode ? 'dark:bg-gray-900' : ''}`}
            onClick={() => setContent('Spotify')}
          >
            <p className='font-semibold'>Spotify</p>
          </button>
          <button
            className={`bg-blue-800 text-white px-4 py-2 m-2 rounded ${darkMode ? 'dark:bg-gray-900' : ''}`}
            onClick={() => setContent('Contact')}
          >
            <p className='font-semibold'>Contact</p>
          </button>
        </div>

        {/* Content section */}
        <div className='mt-4 flex justify-center'>
            <Card content={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
