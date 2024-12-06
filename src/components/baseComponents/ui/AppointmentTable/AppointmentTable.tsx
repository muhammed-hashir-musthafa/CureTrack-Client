"use client";
  import { ChangeEvent, useState } from "react";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import AppointmentRow from "../AppointmentRow/AppointmentRow";
import SearchBar from "../SearchBar/SearchBar";

const appointments = [
  {
    name: "Erfan PV",
    date: "Jan 4, 2024",
    time: "10:00 AM",
    status: "Scheduled",
    method: "Video Consultation",
  },
  {
    name: "Hashir Musthafa",
    date: "Jan 2, 2024",
    time: "2:30 PM",
    status: "Pending",
    method: "Person Consultation",
  },
];

export default function AppointmentTable() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("All");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch = appointment.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      selectedSpecialization === "All" ||
      appointment.status.toLowerCase() === selectedSpecialization.toLowerCase();

    return matchesSearch && matchesSpecialization;
  });

  const specializations = Array.from(
    new Set(appointments.flatMap((appointment) => appointment.status))
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <div className="flex-grow">
          <SearchBar placeholder="Enter name" searchTerm={searchTerm} onSearchChange={handleSearch} />
        </div>
        <div className="w-full sm:w-auto">
          <Dropdown
            value={selectedSpecialization}
            options={["All", ...specializations]}
            onChange={(option) => setSelectedSpecialization(option.value)}
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-md overflow-hidden mt-4">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Consultation Method</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment, index) => (
                <AppointmentRow key={index} {...appointment} />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-gray-400">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
