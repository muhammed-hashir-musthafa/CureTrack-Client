"use client";
import React from "react";
import { FaUserMd, FaAmbulance, FaBed } from "react-icons/fa";
import StatCard from "@/components/baseComponents/ui/StatCard/StatCard";

// Dummy Data
const statsData = {
  doctors: 24,
  ambulances: 8,
  icuBeds: 5,
  insurancePolicies: 3,
};

const doctorColumns = [
  { key: "doctorId", label: "Doctor ID" },
  { key: "name", label: "Name" },
  { key: "specialty", label: "Specialty" },
  { key: "available", label: "Availability" },
];

const doctorData = [
  {
    doctorId: "D01",
    name: "Dr. Smith",
    specialty: "Cardiology",
    available: "9:00 AM - 3:00 PM",
  },
  {
    doctorId: "D02",
    name: "Dr. Johnson",
    specialty: "Neurology",
    available: "10:00 AM - 4:00 PM",
  },
  {
    doctorId: "D03",
    name: "Dr. Lee",
    specialty: "Pediatrics",
    available: "8:00 AM - 2:00 PM",
  },
];

const ambulanceColumns = [
  { key: "vehicleNumber", label: "Vehicle Number" },
  { key: "contact", label: "Contact Name" },
  { key: "phone", label: "Contact Number" },
];

const ambulanceData = [
  { vehicleNumber: "A123", contact: "John Doe", phone: "+1234567890" },
  { vehicleNumber: "B456", contact: "Jane Smith", phone: "+0987654321" },
];

const icuColumns = [
  { key: "icuId", label: "ICU ID" },
  { key: "available", label: "Available Beds" },
  { key: "total", label: "Total Beds" },
];

const icuData = [
  { icuId: "ICU1", available: 5, total: 10 },
  { icuId: "ICU2", available: 3, total: 5 },
];

// Data Table Component
const DataTable: React.FC<{ columns: any[]; data: any[] }> = ({
  columns,
  data,
}) => (
  <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md p-4">
    <table className="w-full text-left">
      <thead className="bg-gray-700">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="p-2 text-white">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="odd:bg-gray-700 even:bg-gray-600">
            {columns.map((column) => (
              <td key={column.key} className="p-2 text-gray-300">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Hospital Dashboard Page
const HospitalDashboard: React.FC = () => (
  <div className="bg-black h-full text-white p-6 w-full">
    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <StatCard icon={FaUserMd} count={statsData.doctors} label="Doctors" />
      <StatCard
        icon={FaAmbulance}
        count={statsData.ambulances}
        label="Ambulances"
      />
      <StatCard icon={FaBed} count={statsData.icuBeds} label="ICU Beds" />
    </div>

    {/* Doctors Table */}
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">Doctors</h2>
      <DataTable columns={doctorColumns} data={doctorData} />
    </div>

    {/* Ambulances Table */}
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">Ambulances</h2>
      <DataTable columns={ambulanceColumns} data={ambulanceData} />
    </div>

    {/* ICU Capacity Table */}
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">ICU Capacity</h2>
      <DataTable columns={icuColumns} data={icuData} />
    </div>
  </div>
);

export default HospitalDashboard;
