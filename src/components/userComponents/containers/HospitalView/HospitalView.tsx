"use client";
import React, { useState } from "react";
import {
  MdMedicalServices,
  MdLocationOn,
  MdLocalHospital,
  MdContactPhone,
} from "react-icons/md";
import { FaAmbulance, FaLungs, FaUserMd, FaHeartbeat } from "react-icons/fa";
import { FaTint } from "react-icons/fa";
import { Bed, AirVent } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const hospitalData = {
  name: "City Care Hospital",
  address: "123 Health St, Wellness City",
  contactNumber: "123-456-7890",
  website: "www.citycarehospital.com",
  doctors: [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      consultationFee: 500,
      availableTimings: ["10:00 AM", "02:00 PM", "05:00 PM"],
      profilePic: "https://via.placeholder.com/100",
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Neurologist",
      consultationFee: 600,
      availableTimings: ["09:00 AM", "01:00 PM", "04:00 PM"],
      profilePic: "https://via.placeholder.com/100",
    },
    {
      name: "Dr. Michael Clark",
      specialization: "Pediatrician",
      consultationFee: 450,
      availableTimings: ["08:00 AM", "12:00 PM", "03:00 PM"],
      profilePic: "https://via.placeholder.com/100",
    },
  ],
  ambulances: [
    {
      contactName: "John Ambulance",
      contactNumber: 1234567890,
      vehicleNumber: "AMB-1234",
    },
    {
      contactName: "Smith Ambulance",
      contactNumber: 9876543210,
      vehicleNumber: "AMB-5678",
    },
  ],
  bloodGroups: [
    { group: "A+", availability: 5 },
    { group: "B+", availability: 3 },
    { group: "O+", availability: 8 },
    { group: "AB+", availability: 2 },
  ],
  icu: { available: 3, total: 5 },
  ventilators: { available: 2, total: 4 },
  hospitalImage:
    "https://media.bizj.us/view/img/12582276/dsc0088*1200xx5333-4000-334-0.jpg",
};

const HospitalDetailsView: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const handleViewAllDoctors = () => {
    router.push(`/hospitals/${id}/doctors`);
  };

  const [showAllDoctors, setShowAllDoctors] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hospital Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${hospitalData.hospitalImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-green-500">
            {hospitalData.name}
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            Your Health, Our Priority
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Hospital Info Section */}
        <div className="bg-neutral-950 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
            <MdLocalHospital className="mr-3" />
            Hospital Information
          </h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <MdLocationOn className="text-2xl text-green-500 mr-3" />
              {hospitalData.address}
            </p>
            <p className="flex items-center">
              <MdContactPhone className="text-2xl text-green-500 mr-3" />
              {hospitalData.contactNumber}
            </p>
            <p className="flex items-center">
              <MdMedicalServices className="text-2xl text-green-500 mr-3" />
              <a
                href={hospitalData.website}
                target="_blank"
                className="text-blue-400 hover:underline"
                rel="noopener noreferrer"
              >
                {hospitalData.website}
              </a>
            </p>
          </div>
        </div>

        {/* Ambulance Services Section */}
        <div className="bg-neutral-950 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
            <FaAmbulance className="mr-3" />
            Ambulance Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {hospitalData.ambulances.map((ambulance, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <FaAmbulance className="text-4xl text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {ambulance.contactName}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Vehicle: {ambulance.vehicleNumber}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Contact:{" "}
                  <a
                    href={`tel:${ambulance.contactNumber}`}
                    className="text-blue-400 hover:underline"
                  >
                    {ambulance.contactNumber}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <div className="bg-neutral-950 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
            <FaUserMd className="mr-3" />
            Our Doctors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {hospitalData.doctors
              .slice(0, showAllDoctors ? hospitalData.doctors.length : 3)
              .map((doctor, index) => (
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
                  <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Book Appointment
                  </button>
                </div>
              ))}
          </div>
          <div className="mt-6 text-center">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={handleViewAllDoctors}
            >
              View All Doctors
            </button>
          </div>
        </div>

        {/* Blood Groups Section */}
        <div className="bg-neutral-950 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
            <FaHeartbeat className="mr-3" />
            Blood Group Availability
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {hospitalData.bloodGroups.map((group, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition"
              >
                <div className="flex items-center mb-4">
                  {/* Icon for blood group */}
                  <FaTint className="text-3xl text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {group.group}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Available: {group.availability} Units
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Measurement:</span>{" "}
                  {group.availability * 0.5} Liters
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ICU and Ventilator Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ICU Beds Section */}
          <div className="bg-neutral-950 p-8 rounded-xl shadow-xl transform hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
              <Bed className="mr-3 text-green-500" /> {/* Bed icon for ICU */}
              ICU Beds
            </h2>
            <p className="text-xl text-gray-300">
              Available:{" "}
              <span className="font-semibold text-white">
                {hospitalData.icu.available}
              </span>{" "}
              / {hospitalData.icu.total}
            </p>
          </div>

          {/* Ventilators Section */}
          <div className="bg-neutral-950 p-8 rounded-xl shadow-xl transform hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
              <AirVent className="mr-3 text-green-500" />{" "}
              {/* AirVent icon for Ventilators */}
              Ventilators
            </h2>
            <p className="text-xl text-gray-300">
              Available:{" "}
              <span className="font-semibold text-white">
                {hospitalData.ventilators.available}
              </span>{" "}
              / {hospitalData.ventilators.total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailsView;
