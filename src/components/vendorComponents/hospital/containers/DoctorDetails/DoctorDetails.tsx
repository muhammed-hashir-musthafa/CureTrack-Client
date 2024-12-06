"use client";
import { useParams, useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi"; // Import the back icon
import React from "react";

const doctors = [
  {
    doctor: {
      _id: "60b6c0f72f9b4e3a8e9f8cfc",
      fullName: "Dr. John Doe",
      initials: "JD",
      email: "drjohndoe",
      phoneNumber: "7418520963",
      consultationFee: 500,
      specialization: ["Cardiology"],
      profilePicture: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
      gender: "Male",
      yearsOfExperience: 10,
      hospitalName: "City Hospital",
      hospitalAddress: "123 Main St, Anytown",
    },
    createdAt: "2024-01-15T09:00:00Z",
    status: {
      text: "Active",
      color: "text-emerald-500",
      bgColor: "bg-emerald-950",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  },
];

const DoctorDetails: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const doctorId = params?.doctorId as string;
  const doctor = doctors.find((doct) => doct.doctor._id === doctorId);

  if (!doctor) {
    return <p>Doctor not found.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-neutral-200 p-6">
      <div className="flex max-w-4xl w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
         <div className="relative w-1/2">
           <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 p-1.5 text-black border border-gray-600 bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            <HiOutlineArrowLeft className="w-5 h-5" />
          </button>
          <img
            src={doctor.doctor.profilePicture}
            alt="Doctor"
            className="w-full h-full object-cover"
          />
        </div>

         <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">Doctor Details</h1>
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-lime-200 text-neutral-900 font-semibold`}
            >
              {doctor.doctor.initials}
            </div>
            <div>
              <h2 className="text-xl font-bold">{doctor.doctor.fullName}</h2>
              <p className="text-sm text-neutral-400">{doctor.doctor.gender}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Email</h3>
            <p>{doctor.doctor.email}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Phone</h3>
            <p>{doctor.doctor.phoneNumber}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Specialization</h3>
            <p>{doctor.doctor.specialization.join(", ")}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Consultation Fee</h3>
            <p>${doctor.doctor.consultationFee}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Experience</h3>
            <p>{doctor.doctor.yearsOfExperience} years</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Hospital</h3>
            <p>
              {doctor.doctor.hospitalName}, {doctor.doctor.hospitalAddress}
            </p>
          </div>

          <div className="mb-6 flex items-center">
            <span className="font-semibold text-neutral-400 mr-2">Status:</span>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full ${doctor.status.bgColor}`}
            >
              {doctor.status.icon}
              <span className={`${doctor.status.color} font-semibold`}>
                {doctor.status.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
