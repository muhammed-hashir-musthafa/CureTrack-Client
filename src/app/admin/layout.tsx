import React from "react";
import RoleSidebar from "@/components/baseComponents/ui/RoleSidebar/RoleSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const role = "admin";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900">
      <RoleSidebar role={role} />
      <div className="flex-1 bg-black overflow-y-auto">
        <div className="container mx-auto text-white p-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
