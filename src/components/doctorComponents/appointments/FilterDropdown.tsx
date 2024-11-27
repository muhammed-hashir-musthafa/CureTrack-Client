// components/FilterDropdown.tsx


import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
import React, { useState } from "react";

export default function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["pending", "confirmed", "completed", "canceled"];
  const {filterByStatus} = useAppointmentStore()
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    console.log("Selected:", option.toLocaleLowerCase());
    filterByStatus(option)
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-gray-800 text-white py-2 px-4 rounded-md"
      >
        Filter By Status ▼
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-gray-900 border border-gray-950 rounded-md shadow-lg w-full">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className="block w-full text-left px-4 py-2 text-gray-100 hover:bg-gray-950"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}