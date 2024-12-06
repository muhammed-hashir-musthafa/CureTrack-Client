import React from "react";
import Image from "next/image";
import BaseLogo from "@/components/baseComponents/ui/BaseLogo/BaseLogo";
import signupBg from "../../../../../public/images/signupBg.png";
import SignupForm from "@/components/vendorComponents/base/forms/SignupForm/SignupForm";

const VendorsSignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-1 justify-center items-center bg-customDark text-white px-6 md:px-8 relative">
        <BaseLogo />

        <div className="w-full max-w-md text-center overflow-hidden">
          <div className="w-full h-full max-h-[80vh] overflow-y-auto scrollbar-custom">
            <h2 className="text-3xl font-bold mb-2 text-start">Hi there...</h2>
            <p className="mb-6 text-gray-400 text-start">
              SignUp & Get Started with Cure Track.
            </p>

            <SignupForm />
          </div>
        </div>

        <p className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-xs md:text-sm">
          © Cure Track, All Rights Reserved
        </p>
      </div>

      <div className="hidden md:flex flex-1 relative bg-customDark">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={signupBg}
            alt="Doctor in background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="bg-customDark"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorsSignupPage;
