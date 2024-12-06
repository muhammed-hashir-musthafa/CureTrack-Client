import Image from "next/image";
import { FC } from "react";

export const ServiceCard: FC<{
    title: string;
    description: string;
    buttonText: string;
    bgColor?: string;
    imageSrc: string;
  }> = ({ title, description, buttonText, bgColor, imageSrc }) => (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} text-white relative`}>
      <Image
        src={imageSrc}
        alt={`${title} Icon`}
        width={180}
        height={160}
        className="mb-4 mx-auto rounded-lg"
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="mb-6 text-gray-900">{description}</p>
  
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-[#1E1E1E] rounded-full hover:bg-[#16652e] transition duration-300 relative">
          {buttonText}
        </button>
      </div>
    </div>
  );
  