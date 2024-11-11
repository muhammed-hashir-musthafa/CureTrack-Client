import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="w-full mx-auto">
      <form className="space-y-5 text-start">
        <div className="relative">
        <label htmlFor="full-name" className="text-gray-500 text-sm">Email</label>
          <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
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
        <label htmlFor="full-name" className="text-gray-500 text-sm">Password</label>
          <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
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

export default LoginForm;
