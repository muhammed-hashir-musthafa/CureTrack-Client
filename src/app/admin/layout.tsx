import RoleSidebar from "@/components/BaseComponents/ui/RoleSidebar/RoleSidebar";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const role = "admin";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900">
      <RoleSidebar role={role} />
      <div className="flex-1 bg-black overflow-y-auto">
        <div className="flex w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
