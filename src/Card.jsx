import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Adjust the path as per your project structure
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure
import { useInView } from 'react-intersection-observer';
import LeviImage from './src/Levi.JPEG'; // Adjust the path as per your project structure

function App() {
  const { darkMode } = useTheme(); // Retrieve darkMode state from context
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Dark Mode Toggle */}
      <div className="flex justify-end px-6 py-4">
        <DarkModeToggle />
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left py-12 px-6 md:px-12">
        {/* Introduction Text */}
        <div className="md:w-1/2">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
            Hey👋, my name is Levi Kleijnenberg and I am a software developer.
          </h1>
        </div>
        
        {/* Profile Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img 
            src={LeviImage} 
            alt="Levi Kleijnenberg"
            className={`rounded-lg shadow-lg max-w-full h-auto transition-transform duration-300 transform ${darkMode ? 'filter grayscale' : ''}`}
          />
        </div>
      </div>

      {/* Experiences Section */}
      <div className="px-6 md:px-12 py-12">
        <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
          Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div ref={ref1} className={`p-6 rounded-lg shadow-lg transition-transform duration-700 ${inView1 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
            <h3 className="text-2xl font-semibold mb-4">Experience 1</h3>
            <p className="text-lg">Description of the first experience goes here. This can be an overview of a job, project, or relevant activity.</p>
          </div>
          <div ref={ref2} className={`p-6 rounded-lg shadow-lg transition-transform duration-700 ${inView2 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
            <h3 className="text-2xl font-semibold mb-4">Experience 2</h3>
            <p className="text-lg">Description of the second experience goes here. This can be an overview of a job, project, or relevant activity.</p>
          </div>
          <div ref={ref3} className={`p-6 rounded-lg shadow-lg transition-transform duration-700 ${inView3 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
            <h3 className="text-2xl font-semibold mb-4">Experience 3</h3>
            <p className="text-lg">Description of the third experience goes here. This can be an overview of a job, project, or relevant activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
