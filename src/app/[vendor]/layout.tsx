import profileSrc from "/public/images/Logo.jpg";
import BaseNavbar from "@/components/baseComponents/ui/Navbar/Navbar";
import RoleSidebar from "@/components/baseComponents/ui/RoleSidebar/RoleSidebar";
import React from "react";

interface VenodrLayoutProps {
  children: React.ReactNode;
  params: { vendor: string };
}

const VendorLayout: React.FC<VenodrLayoutProps> = ({ children, params }) => {
  const { vendor } = params;

  const role = vendor;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900" id="portalRoot">
      <RoleSidebar role={role} />
      <div className="flex-1 flex flex-col bg-black overflow-y-auto">
        <BaseNavbar role={role} profileName="Doctor Name" profileSrc={profileSrc} />

        <div className="text-white flex-1 pt-24">{children}</div>
      </div>
    </div>
  );
};

export default VendorLayout;
