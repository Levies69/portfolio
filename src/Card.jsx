// Card.jsx

import React from 'react';
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure
import ContactForm from './Contactform'; // Corrected import path

function Card({ content }) {
  const { darkMode } = useTheme(); // Retrieve darkMode state from context

  return (
    <div className={`relative bg-blue-700 text-white p-20 m-5 text-xl font-sans mx-auto rounded-lg
      sm:w-full lg:w-1/2 ${darkMode ? 'dark:bg-gray-900' : ''}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 rounded-lg"
           style={{
             backgroundImage: `linear-gradient(to bottom right, rgba(59, 130, 246, 1), rgba(61, 58, 62, 1))`,
             zIndex: '-1',
             opacity: '0.9',
             backdropFilter: 'blur(20px)',
             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
             borderRadius: '20px',
           }}></div>
      {content === 'Over Mij' && (
        <div className="flex flex-col items-center relative z-10">
          <img src='/ik.JPG' alt='Levi' className="w-1/2 rounded-xl mb-4 transition-transform duration-300 hover:scale-105" />
          <h2 className={`text-center font-bold pb-5 ${darkMode ? 'dark:text-white' : ''}`}>Over Mij</h2>
          <p className={`break-words text-center ${darkMode ? 'dark:text-gray-300' : ''}`}>
            Hey 👋, mijn naam is Levi Kleijnenberg en ik ben geboren op 25 April 2004 in Sommelsdijk. Mijn hobbies zijn Voetballen, Gamen, Programmeren, Gymmen en afspreken met vrienden. 
            <br />
            <br />
            <img src='/teamfoto.JPEG' alt='teamfoto' className="rounded-xl mb-4 w-full transition-transform duration-300 hover:scale-105"/>
            Het voetballen doe ik bij De Jonge Spartaan en dit doe ik nu al zo'n 11 jaar lang. Verder speel ik op de computer vaak Minecraft of Rocket League in mijn vrije tijd met vrienden. af en toe doe ik ook wel eens Programmeren als ik niks meer te doen heb.
            <br />
            <br />
            <img src='/gym.JPEG' alt='gym' className="rounded-xl w-1/2 mb-4 mx-auto transition-transform duration-300 hover:scale-105"/>
            En anders ben ik ook vaak te vinden in de sportschool. Gymmen doe ik nu ook al een kleine 2 jaar. Ook spreek ik vaak af met vrienden in het weekend.
            <br />
            <br />
            <img src='/boys.JPEG' alt='gym' className="rounded-xl mb-4 mx-auto transition-transform duration-300 hover:scale-105"/> 
          </p>
        </div>
      )}
      {content === 'Projecten' && (
        <div className="flex flex-col items-center relative z-10">
          <h2 className={`text-center font-bold pb-5 ${darkMode ? 'dark:text-white' : ''}`}>Projecten</h2>
          <p className={`break-words text-center ${darkMode ? 'dark:text-gray-300' : ''}`}>
            <a href='https://www.mirelzashairstyle.nl/' target="_blank" rel="noopener noreferrer"> 
              Hierin staan mijn afgemaakte Projecten. dit zijn er nog niet zo veel, omdat ik me eerst vol heb moeten focussen op mijn school en stageperiode.
              <br />
              <br />
              <img src='/MirelzaWebsite.jpg' alt='mirelza' className="rounded-xl mb-4 w-full transition-transform duration-300 hover:scale-105"/>
            </a>
            hier heb ik een website gemaakt in mijn tweede leerjaar van school. Mijn kapster had een website nodig en vroeg aan mij of ik voor haar een website kon maken. dit was ook in dezeflde periode als mijn stage en moest dus op mij stage aan die website werken. dit is voor mij doen wel redelijk gelukt en ik heb haar uitgelegd hoe ze zelf haar text, pagina's en foto's kan toevoegen.
            <br />
            <br />
            <a href='https://boersagro.boersweb.nl/' target="_blank" rel="noopener noreferrer">
              <img src='/boersweb.jpg' alt='boersweb' className="rounded-xl mb-4 w-full transition-transform duration-300 hover:scale-105"/>
            </a>
            bij deze website zat ik bij hetzelfde stage bedrijf. de broer van de stagebegeleider is boer en had ook een website nodig. Dit project was meer om te kijken of ik de basis snapte en hoe ik te werk ging bij een project als dit.
            <br />
            <br />
            <a href='https://resplendent-bubblegum-8e8dac.netlify.app/' target="_blank" rel="noopener noreferrer">
              <img src='/weer.png' alt='boersweb' className="rounded-xl mb-4 w-full transition-transform duration-300 hover:scale-105" />
            </a>
            Hier heb ik een app gemaakt waarbij je de weersvoorspelling kunt bekijken per stad. je kan een stad toevoegen aan het startscherm, zodat je hem later sneller kan toevoegen
          </p>
        </div>
      )}

      {content === 'Spotify' && (
        <div className="flex flex-col items-center relative z-10">
          <h2 className={`text-center font-bold pb-5 ${darkMode ? 'dark:text-white' : ''}`}>Spotify Playlists</h2>
          <p className={`break-words text-center ${darkMode ? 'dark:text-gray-300' : ''}`}>Hier heb ik mijn spotify playlist staan waar ik vaak en graag naar luister. Neem zeker even een kijkje en wie weet zit je favoriete artiest er tussen🤷‍♂️.</p>
          <div className="w-full">
            <iframe
              title="Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/6zb0jy460tm13Pi9E4WmaR?utm_source=generator&theme=0"
              width="100%"
              height="800" // Increased height to 300px
              style={{ borderRadius: '12px', marginBottom: '-5px', border: 'none' }} /* Adjust the marginBottom */
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <br />
            <br />
          
          </div>
        </div>
      )}

      {content === 'Contact' && (
        <div className="flex flex-col items-center relative h-auto z-10">
          <h2 className={`text-center font-bold pb-5 ${darkMode ? 'dark:text-white' : ''}`}>Contact</h2>
          <p className={`break-words text-center ${darkMode ? 'dark:text-gray-300' : ''}`}>Geïnteresseerd geraakt? Neem dan contact met mij op via dit contact formulier:</p>
          <br />
          <br />
          <div className='w-full h-auto'>
            <ContactForm />
          </div>
          <br />
          <p className={`break-words text-center ${darkMode ? 'dark:text-gray-300' : ''}`}>📲 Whatsapp: 06-15640140</p>
          <br />
          <a href="mailto:levikleijnenberg@icloud.com" className={`break-words text-center text-white hover:underline ${darkMode ? 'dark:text-gray-300' : ''}`}>✉ Email: levikleijnenberg@icloud.com</a>
        </div>
      )}
    </div>
  );
}

export default Card;
