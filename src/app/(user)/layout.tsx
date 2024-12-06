import profileSrc from "../../..//public/images/Logo.jpg";
import BaseNavbar from "@/components/baseComponents/ui/Navbar/Navbar";
import React from "react";

interface VenodrLayoutProps {
  children: React.ReactNode;
}

const VendorLayout: React.FC<VenodrLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900" id="portalRoot">
      <div className="flex-1 flex flex-col bg-black overflow-y-auto">
        <BaseNavbar profileName="Vendor Name" profileSrc={profileSrc} />

        <div className="text-white flex-1 pt-20">{children}</div>
      </div>
    </div>
  );
};

export default VendorLayout;


