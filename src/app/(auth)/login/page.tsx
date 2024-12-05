import React from "react";
import Image from "next/image";
import loginBg from "../../../../public/images/loginBg.png";
import LoginForm from "@/components/baseComponents/forms/Login/Login";
import BaseLogo from "@/components/baseComponents/ui/BaseLogo/BaseLogo";
 
const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-1 justify-center items-center bg-customDark text-white p-8 relative">
        <BaseLogo />

        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-2 text-start">Login Here...</h2>
          <p className="mb-6 text-gray-400 text-start">
            Get Started with Cure Track.
          </p>
          <LoginForm />
        </div>

        <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
          © Cure Track, All Rights Reserved
        </p>
      </div>

      <div className="hidden md:flex flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={loginBg}
            alt="Doctor in background"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            className="bg-customDark"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
