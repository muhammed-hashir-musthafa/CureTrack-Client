'use client'
import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        Select Option
      </button>
      {isOpen && (
        <div className="absolute left-0-0 mt-2 bg-white text-gray-800 shadow-lg rounded w-48">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;