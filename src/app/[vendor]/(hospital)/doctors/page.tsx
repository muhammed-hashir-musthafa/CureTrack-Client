import DoctorsList from "@/components/vendorComponents/hospital/containers/Doctos-List/DoctorList";
import profileSrc from "/public/images/Logo.jpg";
import React from "react";

const page = () => {
  return <DoctorsList profileSrc={profileSrc} />;
};

export default page;
