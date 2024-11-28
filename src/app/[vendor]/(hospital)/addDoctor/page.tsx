import AddDoctorsClient from '@/components/vendorComponents/hospital/containers/AddDoctors/AddDoctors'
import profileSrc from "/public/images/Logo.jpg";
import React from 'react'

const AddDoctor = () => {
  return (
    <div>
      <AddDoctorsClient profileSrc={profileSrc} />;
    </div>
  )
}

export default AddDoctor
