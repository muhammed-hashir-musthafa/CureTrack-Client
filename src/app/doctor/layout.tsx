  import React from "react";
import profileSrc from "/public/images/Logo.jpg";
import RoleSidebar from "@/components/BaseComponents/ui/RoleSidebar/RoleSidebar";
import BaseNavbar from "@/components/baseComponents/ui/Navbar/Navbar";

interface DoctorLayoutProps {
  children: React.ReactNode;
}

const DoctorLayout: React.FC<DoctorLayoutProps> = ({ children }) => {
  const role = "doctor";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900 ">
       <RoleSidebar role={role} />

      <div className="flex-1 flex flex-col bg-black overflow-y-auto">
         <BaseNavbar profileName="Doctor Name" profileSrc={profileSrc} />

         <div className="text-white flex-1 pt-24">{children}</div> 
      </div>
    </div>
  );
};

export default DoctorLayout;
