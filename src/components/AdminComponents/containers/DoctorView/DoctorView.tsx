"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { FiPhone, FiMail, FiMapPin, FiUser, FiFileText } from "react-icons/fi";

const DoctorDetail: FC = () => {
  const router = useRouter();

  // Dummy doctor data
  const doctor = {
    fullName: "Dr. John Doe",
    email: "drjohndoe@example.com",
    phoneNumber: 1234567890,
    specialization: ["Cardiology", "Internal Medicine"],
    consultationFee: 500,
    IMAId: "IMA1234",
    primarySpecialization: "Cardiology",
    qualification: ["MBBS", "MD"],
    yearsOfExperience: 12,
    hospitalName: "City Health Clinic",
    hospitalAddress: "123 Main St, Springfield, IL",
    dateOfBirth: "1980-05-15",
    medicalRegistrationNumber: "REG123456",
    medicalUniversity: "Springfield Medical College",
    profilePicture: "/path/to/profile-picture.jpg", // Replace with your image URL
    availableTimings: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"],
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b bg-black text-white p-6 sm:p-12">
      <div className="max-w-6xl mx-auto bg-neutral-950 rounded-2xl shadow-lg p-10 sm:p-14">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src={doctor.profilePicture || "/placeholder.png"}
              alt="Profile Picture"
              className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-neutral-700"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">
                {doctor.fullName}
              </h1>
              <p className="text-lg text-emerald-400 mt-1">
                {doctor.primarySpecialization}
              </p>
            </div>
          </div>
          <button
            onClick={() => router.back()}
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium underline transition duration-200"
          >
            &larr; Back to Doctors List
          </button>
        </div>

        {/* Basic Info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-bold text-white mb-4">Contact Info</h2>
            <div className="space-y-4 text-neutral-300">
              <p className="flex items-center gap-3">
                <FiPhone className="text-emerald-400" /> {doctor.phoneNumber}
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="text-emerald-400" /> {doctor.email}
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin className="text-emerald-400" />{" "}
                {doctor.hospitalAddress}
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-bold text-white mb-4">Details</h2>
            <div className="space-y-4 text-neutral-300">
              <p className="flex items-center gap-3">
                <FiFileText className="text-emerald-400" /> Consultation Fee: ₹
                {doctor.consultationFee}
              </p>
              <p className="flex items-center gap-3">
                <FiUser className="text-emerald-400" /> Experience:{" "}
                {doctor.yearsOfExperience} years
              </p>
              <p className="flex items-center gap-3">
                <FiFileText className="text-emerald-400" /> IMA ID:{" "}
                {doctor.IMAId}
              </p>
            </div>
          </div>
        </div>

        {/* Specialization and Timings */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-bold text-white mb-4">
              Specialization
            </h2>
            <ul className="list-disc pl-6 text-neutral-300">
              {doctor.specialization.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-bold text-white mb-4">
              Available Timings
            </h2>
            <ul className="list-disc pl-6 text-neutral-300">
              {doctor.availableTimings.map((timing) => (
                <li key={timing}>{timing}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Details */}
        <div className="mt-10 bg-neutral-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-white mb-4">Education</h2>
          <ul className="list-disc pl-6 text-neutral-300 space-y-3">
            <li>Qualification: {doctor.qualification.join(", ")}</li>
            <li>
              Medical Registration Number: {doctor.medicalRegistrationNumber}
            </li>
            <li>University: {doctor.medicalUniversity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
