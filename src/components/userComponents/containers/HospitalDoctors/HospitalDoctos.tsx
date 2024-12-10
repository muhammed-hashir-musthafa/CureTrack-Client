"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUserMd } from "react-icons/fa";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  consultationFee: number;
  availableTimings: string[];
  profilePic: string;
}

const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    consultationFee: 500,
    availableTimings: ["10:00 AM", "02:00 PM", "05:00 PM"],
    profilePic: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    consultationFee: 600,
    availableTimings: ["09:00 AM", "01:00 PM", "04:00 PM"],
    profilePic: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    name: "Dr. Michael Clark",
    specialization: "Pediatrician",
    consultationFee: 450,
    availableTimings: ["08:00 AM", "12:00 PM", "03:00 PM"],
    profilePic: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    name: "Dr. Emma Brown",
    specialization: "Orthopedic",
    consultationFee: 550,
    availableTimings: ["10:00 AM", "01:30 PM", "04:30 PM"],
    profilePic: "https://via.placeholder.com/100",
  },
];

const HospitalDoctorsList: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const handleRoute = (doctorId: string) => {
    router.push(`/hospitals/${id}/doctors/${doctorId}`);
  };
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Doctors List Banner */}
      <div className="relative w-full h-80 bg-cover bg-center shadow-lg">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-green-500">Our Doctors</h1>
          <p className="mt-3 text-lg text-gray-300">Meet our team of experts</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Doctors Section */}
        <div className="bg-neutral-950 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
            <FaUserMd className="mr-3" />
            Our Doctors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {doctorsData.map((doctor, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={doctor.profilePic}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Fee: ₹{doctor.consultationFee}
                </p>

                <button
                  onClick={() => handleRoute(doctor.id)}
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDoctorsList;
