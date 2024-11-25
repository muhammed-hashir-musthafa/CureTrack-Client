import React from "react";
import Image from "next/image";
import logo from "../../../../../public/images/Logo.jpg";

const BaseLogo = () => {
  return (
    <div className="absolute top-8 left-24 flex items-center">
      <Image
        src={logo}
        alt="Cure Track Logo"
        width={20}
        height={20}
        className="rounded"
      />
      <span className="font-bold text-xl ml-2">Cure Track</span>
    </div>
  );
};

export default BaseLogo;
