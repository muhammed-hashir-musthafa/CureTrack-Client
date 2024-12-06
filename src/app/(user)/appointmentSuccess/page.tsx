import AppointmentSuccess from "@/components/userComponents/containers/AppointmentSuccess/AppointmentSuccess";
import MedicalHistory from "@/components/userComponents/containers/MedicalHIostory/MedicalHistory";
import React from "react";
 
const Page = () => {
  return (
    <div className="flex h-full w-full bg-pink-400 text-white">
      <AppointmentSuccess />
    </div>
  );
}
export default Page;