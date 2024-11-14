import React from "react";

interface DoctorProps {
  children: React.ReactNode;
}

const Doctor: React.FC<DoctorProps> = ({ children }) => {
  const role = "vendor";

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900" id="portalRoot">

      <div className="flex-1 bg-black overflow-y-auto">
        <div className="flex h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default Doctor;