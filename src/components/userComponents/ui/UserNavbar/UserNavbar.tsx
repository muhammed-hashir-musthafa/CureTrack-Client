"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logos/Logo-CureTracK.png";
import { FiBell } from "react-icons/fi";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";  
import Link from "next/link";

const UserNavbar: React.FC = () => {
  const currentPath = usePathname(); 
  const router = useRouter()

  const profileSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
  const profileName = "User";

  return (
    <header className="fixed bg-black text-white flex justify-between items-center px-6 py-4 w-full z-50">
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

      {/* Center the links */}
      <nav className="hidden md:flex flex-grow justify-center space-x-6">
        <Link
          href="/"
          className={`${
            currentPath === "/"
              ? "text-green-500 font-bold"
              : "hover:text-green-500"
          } transition`}
        >
          Home
        </Link>
        <Link
          href="/appointments"
          className={`${
            currentPath === "/appointments"
              ? "text-green-500 font-bold"
              : "hover:text-green-500"
          } transition`}
        >
          Appointments
        </Link>
        <Link
          href="/hospitals"
          className={`${
            currentPath === "/hospitals"
              ? "text-green-500 font-bold"
              : "hover:text-green-500"
          } transition`}
        >
          Health care
        </Link>
        <Link
          href="/medicalHistory"
          className={`${
            currentPath === "/medicalHistory"
              ? "text-green-500 font-bold"
              : "hover:text-green-500"
          } transition`}
        >
          Medical History
        </Link>
        <Link
          href="/about"
          className={`${
            currentPath === "/about"
              ? "text-green-500 font-bold"
              : "hover:text-green-500"
          } transition`}
        >
          Contact Us
        </Link>
      </nav>

      <div className="flex items-center space-x-4 ml-auto">
        <FiBell className="text-white text-2xl cursor-pointer" />
        <span className="text-white">{profileName}</span>
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="flex items-center space-x-2">
              <Image
                width={40}
                height={40}
                src={profileSrc}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white pt-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              <button
                onClick={() => {
                  router.push("/profile");
                  console.log("Navigate to profile");
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => console.log("Logout")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};

export default UserNavbar;
