  'use client'
import React from "react";
import profileSrc from "/public/images/Logo.jpg";
 import BaseNavbar from "@/components/baseComponents/ui/Navbar/Navbar";
import RoleSidebar from "@/components/baseComponents/ui/RoleSidebar/RoleSidebar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactNode } from 'react';


interface DoctorLayoutProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const DoctorLayout: React.FC<DoctorLayoutProps> = ({ children }) => {
  const role = "user";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900 ">
       <RoleSidebar role={role} />

      <div className="flex-1 flex flex-col bg-black overflow-y-auto">
         <BaseNavbar profileName="user Name" profileSrc={profileSrc} />
         <QueryClientProvider client={queryClient}>
          <div className="text-white flex-1 pt-24">{children}</div> 
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default DoctorLayout;
