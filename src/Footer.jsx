import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-4 mt-7 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className={`${darkMode ? 'text-white' : 'text-black'} transition-colors font-sans duration-300`}>
            © 2024 Levi Kleijnenberg
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/levi.kleijnenberg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/levi-kleijnenberg-a27b49242/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
