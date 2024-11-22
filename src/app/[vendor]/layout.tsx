import RoleSidebar from "@/components/BaseComponents/ui/RoleSidebar/RoleSidebar";
import React from "react";



interface VenodrLayoutProps {
  children: React.ReactNode;
  params: { vendor: string };
}

const AdminLayout: React.FC<VenodrLayoutProps> = ({ children, params  }) => {
  
  const { vendor } = params;
  
  const role = vendor;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900" id="portalRoot">
      <RoleSidebar role={role} />
      <div className="flex-1 bg-black overflow-y-auto">
        <div className="flex h-full w-full text-white ">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
