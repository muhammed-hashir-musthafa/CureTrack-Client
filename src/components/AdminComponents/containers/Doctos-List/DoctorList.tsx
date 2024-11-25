"use client";
import { useState, useEffect, ChangeEvent, FC } from "react";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import TableData from "@/components/BaseComponents/ui/Table/TableData";
import TableHeader from "@/components/BaseComponents/ui/Table/TableHeader";
import SearchBar from "@/components/BaseComponents/ui/SearchBar/SearchBar";
import ConfirmationModal from "@/components/BaseComponents/ui/Modals/ConfirmationModal";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import Link from "next/link";

interface IDoctors {
  _id: string;
  FullName: string;
  Email: string;
  PhoneNumber: number;
  Specialization: string[];
  ConsultationFee: number;
  IMAId: string;
  ProfilePicture: string | null;
  CreatedAt: string;
  IsActive: boolean;
}

const dummyDoctorsData = [
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfc",
    FullName: "Dr. John Doe",
    Email: "drjohndoe@example.com",
    PhoneNumber: 1234567890,
    ConsultationFee: 500,
    Specialization: ["Cardiology"],
    IMAId: "IMA1234",
    ProfilePicture: "path/to/profile-picture.jpg",
    CreatedAt: "2024-01-15T09:00:00Z",
    IsActive: true,
  },
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfd",
    FullName: "Dr. Jane Smith",
    Email: "drjanesmith@example.com",
    PhoneNumber: 9876543210,
    ConsultationFee: 300,
    Specialization: ["Neurology"],
    IMAId: "IMA5678",
    ProfilePicture: "path/to/profile-picture-2.jpg",
    CreatedAt: "2024-02-10T10:30:00Z",
    IsActive: true,
  },
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfe",
    FullName: "Dr. Michael Brown",
    Email: "drmichaelbrown@example.com",
    PhoneNumber: 1122334455,
    ConsultationFee: 700,
    Specialization: ["Orthopedics"],
    IMAId: "IMA9012",
    ProfilePicture: "path/to/profile-picture-3.jpg",
    CreatedAt: "2024-03-20T11:45:00Z",
    IsActive: false,
  },
];
const DoctorsList: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctors | null>(null);
  const [doctors, setDoctors] = useState(dummyDoctorsData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [mounted, setMounted] = useState(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (doctor: IDoctors) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const specializations = Array.from(
    new Set(dummyDoctorsData.flatMap((doctor) => doctor.Specialization))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.FullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.Email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      selectedSpecialization === "All" ||
      doctor.Specialization.includes(selectedSpecialization);

    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Active" && doctor.IsActive) ||
      (filterStatus === "Inactive" && !doctor.IsActive);

    return matchesSearch && matchesSpecialization && matchesStatus;
  });

  const confirmToggleStatus = () => {
    if (selectedDoctor) {
      setDoctors((prevDoctors) =>
        prevDoctors.map((doctor) =>
          doctor._id === selectedDoctor._id
            ? { ...doctor, IsActive: !doctor.IsActive }
            : doctor
        )
      );
      setShowModal(false);
      setSelectedDoctor(null);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 w-full">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700 tracking-wide">
        Doctors Management
      </h1>

      <div className="flex justify-between items-center mb-6 gap-4">
        {/* Search Bar on Left */}
        <div className="flex-grow sm:flex-grow-0">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} placeholder={"Search by name or email..."}/>
        </div>

        <div className="ml-auto flex gap-4 items-center">
          <div className="w-full max-w-xs">
            <Dropdown
              value={selectedSpecialization}
              options={["All", ...specializations]}
              onChange={(option) => setSelectedSpecialization(option.value)}
            />
          </div>
          <div className="w-full max-w-xs">
            <Dropdown
              value={filterStatus}
              options={["All", "Active", "Inactive"]}
              onChange={(option) => setFilterStatus(option.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-neutral-900 text-sm sm:text-base">
          <thead>
            <tr className="bg-neutral-950 text-neutral-300 font-semibold text-xs sm:text-sm tracking-wider">
              <TableHeader label="Full Name" />
              <TableHeader label="Email" />
              <TableHeader label="Phone" />
              <TableHeader label="Specialization" />
              <TableHeader label="Status" />
              <TableHeader label="Actions" />
              <TableHeader label="Details" />
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor, index) => (
              <tr
                key={doctor._id}
                className={index % 2 === 1 ? "bg-zinc-900" : ""}
              >
                <TableData>{doctor.FullName}</TableData>
                <TableData>{doctor.Email}</TableData>
                <TableData>{doctor.PhoneNumber}</TableData>
                <TableData>{doctor.Specialization.join(", ")}</TableData>
                <TableData>
                  <div
                    className={`flex gap-1 items-center self-stretch py-0.5 pr-2 pl-1.5 my-auto rounded-2xl ${
                      doctor.IsActive
                        ? "bg-emerald-950 text-emerald-500"
                        : "bg-red-950 text-red-500"
                    }`}
                  >
                    {doctor.IsActive ? (
                      <FiUserCheck className="w-4 h-4" />
                    ) : (
                      <FiUserX className="w-4 h-4" />
                    )}
                    <div className="self-stretch my-auto text-xs font-semibold">
                      {doctor.IsActive ? "Active" : "Inactive"}
                    </div>
                  </div>
                </TableData>
                <TableData className="text-center">
                  <button
                    onClick={() => openModal(doctor)}
                    className={`text-sm font-semibold rounded-lg px-4 py-2 transition-colors duration-200 ${
                      doctor.IsActive
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {doctor.IsActive ? (
                      <>
                        <FiUserX className="inline-block mr-1" />
                        Block
                      </>
                    ) : (
                      <>
                        <FiUserCheck className="inline-block mr-1" />
                        Unblock
                      </>
                    )}
                  </button>
                </TableData>
                <TableData className="text-center">
                  <Link href={`/admin/doctors/doctor`}>
                    <button className="text-emerald-500 font-semibold">
                      View
                    </button>
                  </Link>
                </TableData>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={confirmToggleStatus}
        message={`Are you sure you want to ${
          selectedDoctor?.IsActive ? "block" : "unblock"
        } this doctor?`}
        confirmText={selectedDoctor?.IsActive ? "Unblock" : "Block"}

      />
    </div>
  );
};

export default DoctorsList;
