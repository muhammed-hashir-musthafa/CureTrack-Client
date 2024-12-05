import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logos/Logo-CureTracK.png";

const UserNavbar: React.FC = () => {
  return (
    <header className="fixed bg-black text-white flex justify-between items-center px-6 py-4 w-full z-50 ">
      <div className="flex items-center space-x-3">
        <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
          <Image
            alt="Logo"
            src={logo}
            className="w-6 h-6 text-black font-bold"
            priority
          />
        </div>
        <span className="font-semibold text-lg">Cure Track</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-green-500 hover:underline">
          Home
        </a>
        <a href="#" className="hover:text-green-500 transition">
          Appointments
        </a>
        <a href="#" className="hover:text-green-500 transition">
          Health care
        </a>
        <a href="#" className="hover:text-green-500 transition">
          Medical History
        </a>
        <a href="#" className="hover:text-green-500 transition">
          Contact Us
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3a2.032 2.032 0 01-.595 1.595L4 17h5m6 0a3 3 0 11-6 0h6z"
            />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">AR</span>
          </div>
          <span className="hidden md:inline text-sm">Alex Lawrence</span>
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
