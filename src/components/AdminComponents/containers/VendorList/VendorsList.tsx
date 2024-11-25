"use client";
import { useState, useEffect, ChangeEvent, FC } from "react";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import TableData from "@/components/BaseComponents/ui/Table/TableData";
import TableHeader from "@/components/BaseComponents/ui/Table/TableHeader";
import SearchBar from "@/components/BaseComponents/ui/SearchBar/SearchBar";
import ConfirmationModal from "@/components/BaseComponents/ui/Modals/ConfirmationModal";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import Link from "next/link";

interface IVendors {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  city: string;
  vendorRole: string[];
  isApprovedByAdmin: boolean;
  createdAt: string;
}

const dummyVendorsData = [
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfc",
    name: "City Hospital",
    email: "contact@cityhospital.com",
    phoneNumber: 1234567890,
    city: "New York",
    vendorRole: ["hospital"],
    isApprovedByAdmin: true,
    createdAt: "2024-01-15T09:00:00Z",
  },
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfd",
    name: "Health Plus Pharmacy",
    email: "support@healthpluspharmacy.com",
    phoneNumber: 9876543210,
    city: "San Francisco",
    vendorRole: ["pharmacy"],
    isApprovedByAdmin: false,
    createdAt: "2024-02-10T10:30:00Z",
  },
  {
    _id: "60b6c0f72f9b4e3a8e9f8cfe",
    name: "Diagnostic Labs",
    email: "info@diagnosticlabs.com",
    phoneNumber: 1122334455,
    city: "Los Angeles",
    vendorRole: ["lab"],
    isApprovedByAdmin: true,
    createdAt: "2024-03-20T11:45:00Z",
  },
];

const VendorListPage: FC = () => {
  const [vendors, setVendors] = useState<IVendors[]>(dummyVendorsData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedVendor, setSelectedVendor] = useState<IVendors | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (vendor: IVendors) => {
    setSelectedVendor(vendor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVendor(null);
  };

  const confirmToggleStatus = () => {
    if (selectedVendor) {
      setVendors((prevVendors) =>
        prevVendors.map((vendor) =>
          vendor._id === selectedVendor._id
            ? { ...vendor, isApprovedByAdmin: !vendor.isApprovedByAdmin }
            : vendor
        )
      );
      closeModal();
    }
  };

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All" || vendor.vendorRole.includes(selectedRole);

    const matchesStatus =
      selectedStatus === "All" ||
      (selectedStatus === "Active" && vendor.isApprovedByAdmin) ||
      (selectedStatus === "Inactive" && !vendor.isApprovedByAdmin);

    return matchesSearch && matchesRole && matchesStatus;
  });

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 w-full">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700 tracking-wide">
        Vendors Management
      </h1>

      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex-grow sm:flex-grow-0">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            placeholder={"Search by name or city..."}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-full max-w-xs">
            <Dropdown
              value={selectedRole}
              options={["All", "hospital", "lab", "pharmacy"]}
              onChange={(option) => setSelectedRole(option.value)}
            />
          </div>
          <div className="w-full max-w-xs">
            <Dropdown
              value={selectedStatus}
              options={["All", "Active", "Inactive"]}
              onChange={(option) => setSelectedStatus(option.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-neutral-900 text-sm sm:text-base">
          <thead>
            <tr className="bg-neutral-950 text-neutral-300 font-semibold text-xs sm:text-sm tracking-wider">
              <TableHeader label="Name" />
              <TableHeader label="Email" />
              <TableHeader label="Phone" />
              <TableHeader label="City" />
              <TableHeader label="Role" />
              <TableHeader label="Status" />
              <TableHeader label="Actions" />
              <TableHeader label="Details" />
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, index) => (
              <tr
                key={vendor._id}
                className={index % 2 === 1 ? "bg-zinc-900" : ""}
              >
                <TableData>{vendor.name}</TableData>
                <TableData>{vendor.email}</TableData>
                <TableData>{vendor.phoneNumber}</TableData>
                <TableData>{vendor.city}</TableData>
                <TableData>{vendor.vendorRole.join(", ")}</TableData>
                <TableData>
                  <div
                    className={`flex gap-1 items-center py-0.5 pr-2 pl-1.5 rounded-2xl ${
                      vendor.isApprovedByAdmin
                        ? "bg-emerald-950 text-emerald-500"
                        : "bg-red-950 text-red-500"
                    }`}
                  >
                    {vendor.isApprovedByAdmin ? (
                      <FiUserCheck className="w-4 h-4" />
                    ) : (
                      <FiUserX className="w-4 h-4" />
                    )}
                    <div className="text-xs font-semibold">
                      {vendor.isApprovedByAdmin ? "Active" : "Inactive"}
                    </div>
                  </div>
                </TableData>
                <TableData>
                  <button
                    onClick={() => openModal(vendor)}
                    className={`text-sm font-semibold rounded-lg px-4 py-2 ${
                      vendor.isApprovedByAdmin
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                  >
                    {vendor.isApprovedByAdmin ? (
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
                <TableData>
                  <Link href={`/admin/vendors-list/vendor`}>
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
          selectedVendor?.isApprovedByAdmin ? "block" : "unblock"
        } this vendor?`}
        confirmText={selectedVendor?.isApprovedByAdmin ? "Unblock" : "Block"}
      />
    </div>
  );
};

export default VendorListPage;
