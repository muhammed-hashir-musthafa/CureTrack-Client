import Appointments from "@/components/doctorComponents/containers/appointments/Appointments";
import React from "react";
 
const DashboardPage = () => {
  return (
    <div className="flex h-full w-full text-white">
      <Appointments />
    </div>
  );
}
export default DashboardPage;