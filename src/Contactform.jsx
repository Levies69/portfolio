// ContactForm.jsx

import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the path as per your project structure
import { useTheme } from './ThemeContext'; // Adjust the path as per your project structure

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode } = useTheme(); // Retrieve darkMode state from context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xkgwndoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Ensure formData is correctly structured
      });
      if (response.ok) {
        setStatus('Email sent successfully');
        setIsModalOpen(true); // Open the modal on successful submission
      } else {
        setStatus('Failed to send email');
      }
    } catch (error) {
      setStatus('Failed to send email');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus(''); // Clear status when closing the modal
    setFormData({ name: '', email: '', message: '' }); // Optionally reset form fields
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`max-w-lg h-auto mx-auto p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded`}
        style={{ marginBottom: '0' }} // Ensure no margin at the bottom
      >
        <h2 className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-700'} font-bold mb-4`}>Contact Formulier</h2>
        {status && <p className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>{status}</p>}
        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-white' : 'text-gray-700'} text-sm font-bold mb-2 `} htmlFor="name">
            Naam
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 ${darkMode ? 'text-white bg-gray-700 ' : 'text-gray-700 bg-gray-200'} py-2  rounded`}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-white' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 ${darkMode ? 'text-white bg-gray-700' : 'text-gray-700 bg-gray-200'} py-2  rounded`}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-white' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="message">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 ${darkMode ? 'text-white bg-gray-700' : 'text-gray-700 bg-gray-200'} py-2  rounded`}
            rows="5"
            required
          />
        </div>
        <button type="submit" className={`bg-blue-500 ${darkMode ? 'text-white' : 'text-gray-100'} w-full  py-10 rounded hover:bg-blue-700`}>
          Stuur
        </button>
      </form>
      
      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ContactForm;
