import profileSrc from "/public/images/Logo.jpg";
import BaseNavbar from "@/components/baseComponents/ui/Navbar/Navbar";
import RoleSidebar from "@/components/baseComponents/ui/RoleSidebar/RoleSidebar";
import React from "react";

interface VendorLayoutProps {
  children: React.ReactNode;
  params: { vendor: string };
}

const VendorLayout: React.FC<VendorLayoutProps> = ({ children, params }) => {
  const { vendor } = params;

  const role = vendor as "admin" | "hospital" | "lab" | "pharmacy" | "doctor";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900" id="portalRoot">
      <RoleSidebar role={role} />
      <div className="flex-1 flex flex-col bg-black overflow-y-auto">
        <BaseNavbar
          profileName="Vendor Name"
          profileSrc={profileSrc}
          role={role}
        />
        <div className="text-white flex-1 pt-24">{children}</div>
      </div>
    </div>
  );
};

export default VendorLayout;
