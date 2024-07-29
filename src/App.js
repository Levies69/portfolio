import React, { useState, useEffect, useMemo } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure
import { useInView } from 'react-intersection-observer';
import LeviImage from '../src/img/ik.JPG';
import MirelzaImage from '../src/img/MirelzaWebsite.jpg';
import Boersweb from '../src/img/boersweb.jpg';
import Weatherapp from '../src/img/weer.png';
import ContactForm from './Contactform';
import Lifeline from './Lifeline';
import Footer from './Footer';

function App() {
  const { darkMode } = useTheme();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      opacity: 0,
    });
  }, []);

  const texts = useMemo(() => ['Software Developer', 'Web Developer', 'Life Enjoyer'], []);
  const colors = useMemo(() => ['text-red-600', 'text-blue-600', 'text-yellow-600'], []);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFadeClass('opacity-0'); // Start fading out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setCurrentColor(colors[index]);
        setFadeClass('opacity-100'); // Start fading in
      }, 500); // Time to fade out
    }, 2500); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts, colors]); // Dependency array remains the same

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Dark Mode Toggle */}
      <div className="top-0 right-0 px-6 py-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left py-16 md:py-24 px-6 md:px-12 mt-16">
        {/* Introduction Text */}
        <div className="md:w-1/2">
          <h1 className={`text-7xl font-bold ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300 font-sans`}>
            Hey👋, my name is <span className={`text-7xl font-bold ${darkMode ? 'text-purple-800' : 'text-green-700'} transition-colors duration-300`}>Levi Kleijnenberg</span> and I am a <span className={`${currentColor} transition-opacity duration-500 ${fadeClass}`}>{currentText}</span>.
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
      <div className="px-6 md:px-12 py-16 md:py-40">
        <h2 className={`text-4xl  mb-8 ${darkMode ? 'text-white' : 'text-black'} transition-colors ease-in-out font-sans duration-300`}>
          Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            ref={ref1}
            onClick={() => handleCardClick(
              <>
                <h3 className="text-2xl font-sans mb-4">Hairdresser website</h3>
                <p className="text-lg font-sans">
                  <span className='font-bold'>In</span> this job, my hairdresser asked me to make me a website for her to attract more customers to her salon. this worked out perfectly, because i was in my internship and one of the tasks were that i needed to build a website for a customer. so it was kind of like a win-win situation for the both of us.
                </p>
                <a href='https://www.mirelzashairstyle.nl' target="_blank" rel="noopener noreferrer">
                  <img src={MirelzaImage} alt="Mirelza Website" />
                </a>
              </>
            )}
            className={`reveal p-6 rounded-lg shadow-lg transition-transform duration-900 ease-out cursor-pointer ${inView1 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} hover:shadow-2xl hover:scale-105`}
          >
            <h3 className="text-2xl font-sans mb-4">Hairdresser website</h3>
            <p className="text-lg font-sans">
              <span className='font-bold'>In</span> this job, my hairdresser asked me to make me a website for her to attract more customers to her salon. this worked out perfectly, because i was in my internship and one of the tasks were that i needed to build a website for a customer. so it was kind of like a win-win situation for the both of us.
            </p>
            <a href='https://www.mirelzashairstyle.nl' target="_blank" rel="noopener noreferrer">
              <img src={MirelzaImage} alt="Mirelza Website" />
            </a>
          </div>
          <div
            ref={ref2}
            onClick={() => handleCardClick(
              <>
                <h3 className="text-2xl font-semibold mb-4">Farmer website</h3>
                <p className="text-lg">
                  <span className='font-bold'>In</span> this job, i was in the same internship as the hairdresser website. but this website was for the brother of my boss at the time. he had a farm and needed a website to show all the information that happend on the farm. i tried a new format to build this website, so i needded to learn a lot of new things.
                </p>
                <a href='https://boersagro.boersweb.nl/' target="_blank" rel="noopener noreferrer">
                  <img src={Boersweb} alt="Boersweb" />
                </a>
              </>
            )}
            className={`reveal p-6 rounded-lg shadow-lg transition-transform duration-800 ease-out cursor-pointer ${inView2 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} hover:shadow-2xl hover:scale-105`}
          >
            <h3 className="text-2xl font-font-sans mb-4">Farmer website</h3>
            <p className="text-lg">
              <span className='font-bold'>In</span> this job, i was in the same internship as the hairdresser website. but this website was for the brother of my boss at the time. he had a farm and needed a website to show all the information that happend on the farm. i tried a new format to build this website, so i needded to learn a lot of new things.
            </p>
            <a href='https://boersagro.boersweb.nl/' target="_blank" rel="noopener noreferrer">
              <img src={Boersweb} alt="Boersweb" />
            </a>
          </div>
          <div
            ref={ref3}
            onClick={() => handleCardClick(
              <>
                <h3 className="text-2xl font-semibold mb-4">My own Weather App</h3>
                <p className="text-lg">
                  <span className='font-bold'>In</span> this project, I wanted to build a website to learn more about how you can use APIs in a good way and the structure of a modern front-end application. so I build a weather application with an API that provides me the data for the weather.
                </p>
                <a href='https://weatherapi-app.netlify.app' target="_blank" rel="noopener noreferrer">
                  <img src={Weatherapp} alt="Weather App" />
                </a>
              </>
            )}
            className={`reveal p-6 rounded-lg shadow-lg transition-transform duration-800 ease-out cursor-pointer ${inView3 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0'} ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} hover:shadow-2xl hover:scale-105`}
          >
            <h3 className="text-2xl font-sans mb-4">My own Weather App</h3>
            <p className="text-lg">
              <span className='font-bold'>In</span> this project, I wanted to build a website to learn more about how you can use APIs in a good way and the structure of a modern front-end application. so I build a weather application with an API that provides me the data for the weather.
            </p>
            <a href='https://weatherapi-app.netlify.app' target="_blank" rel="noopener noreferrer">
              <img src={Weatherapp} alt="Weather App" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-4">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              &times;
            </button>
            {modalContent}
          </div>
        </div>
      )}

      <Lifeline />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
