// Modal.jsx

import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-50">
    <h2 className="text-2xl text-gray-700 font-bold mb-4">Email has been send!</h2>
        <p className='text-gray-700'>Your email has successfully been send! I wil try to reply as soon as i can.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4  py-2 rounded mt-4 hover:bg-blue-700"
        >
          Alright
        </button>
      </div>
    </div>
  );
};

export default Modal;
