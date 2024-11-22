import RoleSidebar from "@/components/baseComponents/ui/RoleSidebar/RoleSidebar";
import React from "react";

interface VendorsLayoutProps {
  children: React.ReactNode;
}

const VendorLayout: React.FC<VendorsLayoutProps> = ({ children }) => {
  const role = "vendor";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900">
      <RoleSidebar role={role} />
      <div className="flex-1 bg-black overflow-y-auto">
        <div className="text-white flex h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default VendorLayout;
