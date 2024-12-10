"use client";
import { useParams, useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";
import React, { useState } from "react";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";

const doctors = [
  {
    doctor: {
      _id: "1",
      fullName: "Dr. John Doe",
      initials: "JD",
      email: "drjohndoe@gmail.com",
      phoneNumber: "7418520963",
      dateOfjoining: "15 Oct 2023",
      medicalRegistrationNumber: "REG123456",
      medicalUniversity: "Springfield Medical College",
      consultationFee: 500,
      IMAId: "IMA1234",

      specialization: ["Cardiology", "General Medicine"],
      profilePicture:
        "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
      gender: "Male",
      primarySpecialization: "Cardiology",

      qualification: ["MBBS", "MD"],
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

const ScheduleAppointment: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const doctorId = params?.doctorId as string;
  const doctor = doctors.find((doct) => doct.doctor._id === doctorId);

  if (!doctor) {
    return <p>Doctor not found.</p>;
  }

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const slots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white p-6 sm:p-12">
      <div className="max-w-6xl mx-auto bg-neutral-950 rounded-2xl shadow-lg p-10 sm:p-12 relative  border border-gray-600">
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 p-2 text-emerald-500 border border-emerald-400 bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
        >
          <HiOutlineArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <img
            src={doctor.doctor.profilePicture || "/placeholder.png"}
            alt="Profile Picture"
            className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-gradient-to-tr from-emerald-400 to-cyan-500"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">
              {doctor.doctor.fullName}
            </h1>
            <p className="text-lg text-emerald-400 mt-1">
              {doctor.doctor.primarySpecialization}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300 relative border border-gradient-to-tr from-emerald-400 to-cyan-500">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Details</h2>
                <div className="space-y-4 text-neutral-300">
                  <p className="flex items-center gap-3">
                    <FiPhone className="text-emerald-400" />
                    Contact No. {doctor.doctor.phoneNumber}
                  </p>
                  <p className="flex items-center gap-3">
                    <FiMail className="text-emerald-400" />
                    Email ID: {doctor.doctor.email}
                  </p>

                  <p className="flex items-center gap-3">
                    <FiFileText className="text-emerald-400" />
                    IMA ID: {doctor.doctor.IMAId}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Specialization</h2>
                <div className="mt-4 space-y-2">
                  {doctor.doctor.specialization.map((spec) => (
                    <span
                      key={spec}
                      className="inline-block bg-emerald-500 bg-opacity-20 text-emerald-400 px-3 me-2 py-1 rounded-lg text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300 relative border border-gradient-to-tr from-emerald-400 to-cyan-500">
            <h2 className="text-xl font-bold text-white mb-4">
              Schedule a Slot
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {slots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotClick(slot)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                      selectedSlot === slot
                        ? "bg-cyan-500 text-white"
                        : "bg-emerald-500 text-emerald-50 hover:bg-emerald-400"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div>
                <p className="text-neutral-300 text-sm">
                  <span className="font-semibold text-emerald-400">
                    Selected Slot:
                  </span>{" "}
                  <span className="text-neutral-50">
                    {selectedSlot || "None"}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                disabled={!selectedSlot}
                className={`w-full py-3 rounded-lg font-bold transition ${
                  selectedSlot
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
