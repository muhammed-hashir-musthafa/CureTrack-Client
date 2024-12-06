"use client";
import { useState, ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import { FiUserCheck, FiUserX, FiEye } from "react-icons/fi";
import TableData from "@/components/baseComponents/ui/Table/TableData";
import TableHeader from "@/components/baseComponents/ui/Table/TableHeader";
import SearchBar from "@/components/baseComponents/ui/SearchBar/SearchBar";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import { IDoctors } from "@/interfaces/doctor";
import ConfirmationModal from "@/components/baseComponents/ui/Modals/ConfirmationModal";
import StatCard from "@/components/baseComponents/ui/StatCard/StatCard";
import mge from "../../../../../../public/images/Logo.jpg";
import { MdStore } from "react-icons/md";
import Button from "@/components/adminComponents/ui/Buttons/ViewButton";
import { FaPlus } from "react-icons/fa";
import AddNewButton from "@/components/baseComponents/ui/AddNewButton/AddNewButton";
import Image from "next/image";
import { NavbarProps } from "@/interfaces/common";
import { HiOutlineArrowLeft } from "react-icons/hi";

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
    experience: "1 Year",
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
    experience: "1 Year",
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
    experience: "1 Year",
  },
];
const AddDoctorsClient: React.FC<NavbarProps> = ({
  profileSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
}) => {
  const [doctors, setDoctors] = useState<IDoctors[]>(dummyDoctorsData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("All");
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const specializations = Array.from(
    new Set(dummyDoctorsData.flatMap((doctor) => doctor.Specialization))
  );

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

  const handleAddDoctor = () => {
    // router.push(`/hospital/addDoctor`);
    console.log("subject");
  };
  const handleView = () => {
    console.log("object");
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 w-full">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-500 tracking-wide">
        Doctors
      </h1>

      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <button
          onClick={() => router.back()}
          className="top-4 left-4 p-1.5 text-white border border-gray-200 bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          <HiOutlineArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-grow sm:flex-grow-0">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-full max-w-xs mx-auto">
            <Dropdown
              value={selectedSpecialization}
              options={["All", ...specializations]}
              onChange={(option) => setSelectedSpecialization(option.value)}
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
              <TableHeader label="IMA Id" />
              <TableHeader label="Specialization" />
              <TableHeader label="Experience" />
              <TableHeader label="Actions" />
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor, index) => (
              <tr
                key={doctor._id}
                className={index % 2 === 1 ? "bg-zinc-900" : ""}
              >
                <TableData>
                  <div className="flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      src={profileSrc}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover me-3"
                    />
                    <span>{doctor.FullName}</span>
                  </div>
                </TableData>
                <TableData>{doctor.Email}</TableData>
                <TableData>{doctor.PhoneNumber}</TableData>
                <TableData>{doctor.IMAId}</TableData>
                <TableData>{doctor.Specialization.join(", ")}</TableData>

                <TableData className="text-center">
                  {doctor.experience}
                </TableData>
                <TableData className="text-center">
                  <AddNewButton
                    label="Add"
                    icon={<FaPlus className="text-teal-500" />}
                    onClick={handleAddDoctor}
                  />
                </TableData>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDoctorsClient;
