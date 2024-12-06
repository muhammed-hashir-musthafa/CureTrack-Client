import React from "react";
import Image from "next/image";
import signupBg from "../../../../../public/images/signupBg.png";
import BaseLogo from "@/components/baseComponents/ui/BaseLogo/BaseLogo";
import SignUpForm from "@/components/userComponents/forms/SignUpForm/SingUpForm1";


const UserSignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-1 justify-center items-center bg-customDark text-white p-8 relative">
        <BaseLogo />

        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold  text-start">Hi there...</h2>
          <p className=" text-gray-400 text-start">
            SignUp & Get Started with Cure Track.
          </p>
          <SignUpForm />
        </div>

        <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
          © Cure Track, All Rights Reserved
        </p>
      </div>

      <div className="hidden md:flex flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={signupBg}
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

export default UserSignupPage;
