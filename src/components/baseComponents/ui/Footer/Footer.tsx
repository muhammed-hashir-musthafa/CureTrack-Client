import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              About Cure Track
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Cure Track is a cross-border telemedicine platform bridging a gap
              in specialty care by connecting patients around the world from
              their homes to the top hospitals and specialists in over all the
              world.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              Useful Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/appointments"
                  className="hover:underline hover:text-emerald-400"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitals"
                  className="hover:underline hover:text-emerald-400"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/medicalHistory"
                  className="hover:underline hover:text-emerald-400"
                >
                  Medical History
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:text-emerald-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              Contact Info
            </h2>
            <p className="text-sm text-gray-400">
              <strong>India Office:</strong> GIDC Kanera
            </p>
            <div className="flex items-center gap-3 bg-gray-600/70 backdrop-blur-md p-3 px-4 rounded-lg shadow-sm w-64">
              <div className="flex items-center justify-center w-10 h-10 bg-white text-emerald-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l8 8 8-8" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Contact Us</p>
                <a
                  href="mailto:contact@curetrack.com"
                  className="text-sm text-white underline hover:text-emerald-400 transition duration-300"
                >
                  contact@curetrack.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mx-auto">
            <p>&copy; 2024 Cure Track. All Rights Reserved.</p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-700 transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-800 transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-800 transition duration-300"
            >
              <FaPinterestP size={24} />
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-800 transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
