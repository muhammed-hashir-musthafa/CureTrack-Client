import React from "react";
import Image from "next/image";
import OtpBg from "../../../../public/images/loginBg.png";
import dynamic from "next/dynamic";
import BaseLogo from "@/components/baseComponents/ui/baseLogo/baseLogo";

const OtpPage = dynamic(
  () => import("@/components/baseComponents/containers/otp-page/otp-page"),
  { ssr: false }
);

const Otp: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 w-full bg-gray-900 text-white flex flex-col md:justify-center items-center p-10 backdrop-blur-md bg-opacity-50">
        <div className="mb-4 md:mb-0 mt-8 md:mt-0">
          <BaseLogo />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Enter OTP Here...
          </h1>
        </div>
        <div className="mt-auto md:mt-0 mb-8 md:mb-0">
          <p className="text-md md:text-lg text-gray-400">
            Get started with your appointments.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 w-full relative">
        <Image
          src={OtpBg}
          alt="Doctor background"
          layout="fill"
          objectFit="cover"
          className="filter blur-md opacity-60"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-800 bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-md w-11/12 md:w-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
          Verify OTP
        </h2>
        <p className="text-gray-400 mb-6">
          Please enter the OTP sent to your registered mobile number.
        </p>
        <OtpPage />
      </div>
    </div>
  );
};

export default Otp;
