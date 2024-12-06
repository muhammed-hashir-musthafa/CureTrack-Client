import { FC } from "react";
import videoConsultation from "../../../public/images/video consultation.png";
import hospital from "../../../public/images/hospital.png";
import lab from "../../../public/images/lab.png";
import pharmacy from "../../../public/images/pharmacy.png";
import logo from "../../../public/images/Logo.jpg";
import Image from "next/image";
 import { FaPhoneAlt } from "react-icons/fa";
import { ServiceCard } from "@/components/baseComponents/ui/ServiceCard/ServiceCard";
import { Footer } from "@/components/baseComponents/ui/Footer/Footer";

const HomePage: FC = () => {
  const hospitals = [
    { name: "Mayo Clinic", logo: "/mayo-clinic.png" },
    { name: "MD Anderson Cancer Center", logo: "/md-anderson.png" },
    { name: "Cleveland Clinic", logo: "/cleveland-clinic.png" },
    { name: "Stanford Health Care", logo: "/stanford-health.png" },
    { name: "Boston Children’s Hospital", logo: "/boston-childrens.png" },
    { name: "NIH Clinical Center", logo: "/nih-clinical.png" },
    { name: "Stanford Cardiovascular Institute", logo: "/stanford-cardio.png" },
    {
      name: "Children’s Hospital Los Angeles",
      logo: "/childrens-hospital-la.png",
    },
    { name: "Mount Sinai", logo: "/mount-sinai.png" },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#0B0B0B] text-white">
        <header className="flex flex-col items-center justify-center pt-16 pb-12 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            World's Best Advanced <br />
            <span className="text-[#7DE6C1]">Cross-Border Care</span>
          </h1>
          <p className="mt-4 text-lg text-[#CFCFCF]">
            Find The Best Hospitals, Doctors, and Health Care Across the World
          </p>
          <button className="mt-6 px-8 py-3 bg-[#247559] rounded-full text-lg font-semibold hover:bg-[#3d9072] transition duration-300">
            Explore Premium Care
          </button>
        </header>

        <main className="px-4 sm:px-8 lg:px-32 py-12">
          <div className="relative bg-[#1E1E1E] rounded-lg shadow-lg p-8">
            <div className="absolute top-1/2 -left-28 bg-[#343434] px-4 md:px-12 py-2 md:py-6 rounded-full text-xs sm:text-sm font-light sm:font-medium">
              World's Leading Health Care
            </div>

            <div className="absolute top-2/3 -right-28 bg-[#343434] px-4 md:px-12 py-2 md:py-6 rounded-full text-xs sm:text-sm font-light sm:font-medium">
              12 Countries Reached
            </div>

            <Image
              src={videoConsultation}
              alt="Doctor Consultation"
              layout="responsive"
              width={1280}
              height={720}
              className="rounded-lg shadow-lg"
            />
          </div>

          <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Hospitals"
              description="We bring the world's leading hospitals directly to you."
              buttonText="Explore More"
              bgColor="bg-[#FFFFFF]"
              imageSrc={hospital.src}
            />
            <ServiceCard
              title="Pharmacies"
              description="Access pharmacies across the globe, tailored to your needs."
              buttonText="Explore More"
              bgColor="bg-[#FFFFFF]"
              imageSrc={pharmacy.src}
            />
            <ServiceCard
              title="Labs"
              description="Get lab services and diagnostic tests from world-class facilities."
              buttonText="Explore More"
              bgColor="bg-[#FFFFFF]"
              imageSrc={lab.src}
            />
          </section>
        </main>
      </div>
      <div className="flex items-center justify-between bg-[#1A1A2E] rounded-lg p-8 lg:p-12 w-full max-w-6xl mx-auto mt-16">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Videoconsult With <br /> Best Advisors
          </h2>
          <button className="mt-2 px-6 py-3 bg-white text-[#1A1A2E] rounded-full font-medium hover:bg-gray-100 transition duration-300">
            Book a Call
          </button>
        </div>

        <div className="relative">
          <Image
            src={videoConsultation}
            alt="Doctor"
            className="rounded-full object-cover w-48 h-48 lg:w-56 lg:h-56"
          />
          <div className="absolute bottom-4 right-6 lg:bottom-6 lg:right-8 bg-gray-700 p-3 rounded-full">
            <FaPhoneAlt className="w-6 h-6 text-white rotate-" />
          </div>
        </div>
      </div>
      <div className="bg-[#0B0B0B] py-16 px-8 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <div
                key={hospital.name}
                className={`bg-white p-4 rounded-lg shadow-lg flex items-center justify-center
                ${index % 2 === 0 ? "mt-4" : "mb-4"}`}
              >
                <img
                  src={logo.src}
                  alt={hospital.name}
                  className="max-w-[100px] max-h-[80px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-white">
              World's Best Hospitals <br /> & Research Centers
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
