"use client";
import { NavbarProps } from "@/interfaces/common";
import Image from "next/image";
import React from "react";
import { FiBell } from "react-icons/fi";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useRouter } from "next/navigation";

interface BaseNavbarProps extends NavbarProps {
  role: "admin" | "user" | "hospital" | "lab" | "pharmacy" | "doctor"; // Add role prop
}

const BaseNavbar: React.FC<BaseNavbarProps> = ({
  profileSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
  profileName = "User",
  className = "",
  role,
}) => {
  const router = useRouter();

  const navigateToProfile = () => {
    switch (role) {
      case "admin":
        router.push(`/admin/profile`);
        break;
      case "doctor":
        router.push(`/doctor/profile`);
        break;
      case "hospital":
        router.push(`/hospital/profile`);
        break;
      case "lab":
        router.push(`/lab/profile`);
        break;
      case "pharmacy":
        router.push(`/pharmacy/profile`);
        break;
      case "user":
      default:
        router.push(`/user/profile`);
        break;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-[#111211e8] p-4 shadow-lg mx-10 pt-6 rounded-xl ${className}`}
    >
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
                onClick={navigateToProfile}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => router.push("/login")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};

export default BaseNavbar;
