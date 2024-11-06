import React from "react";
import RoleSidebar from "@/components/BaseComponents/ui/RoleSidebar/RoleSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const role = "admin";

  return (
    <div className="flex h-screen">
      <div className="bg-zinc-900">
        <RoleSidebar role={role} />
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
