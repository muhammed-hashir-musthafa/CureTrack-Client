import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className="w-full mx-auto">
      <form className="space-y-5 text-start">
        <div className="relative">
            <label htmlFor="full-name" className="text-gray-500 text-sm">Full Name</label>
          <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
            <FaUser className="h-4 w-4 text-gray-400 mr-3" />
            <input
              id="full-name"
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="relative">
        <label htmlFor="email" className="text-gray-500 text-sm">Email</label>
          <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
            <FaEnvelope className="h-4 w-4 text-gray-400 mr-3" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="relative">
        <label htmlFor="password" className="text-gray-500 text-sm">Password</label>
          <div className="flex  mb-3 items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
            <FaLock className="h-4 w-4 text-gray-400 mr-3" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <button className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
