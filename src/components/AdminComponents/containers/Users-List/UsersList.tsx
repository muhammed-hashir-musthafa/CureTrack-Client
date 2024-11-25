"use client";
import { useState, ChangeEvent, FC } from "react";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import TableData from "@/components/baseComponents/ui/Table/TableData";
import TableHeader from "@/components/baseComponents/ui/Table/TableHeader";
import SearchBar from "@/components/baseComponents/ui/SearchBar/SearchBar";
import ConfirmationModal from "@/components/baseComponents/ui/Modals/ConfirmationModal";

interface User {
  id: string;
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Gender: "Male" | "Female";
  CreatedAt: string;
  IsActive: boolean;
  Occupation: string | null;
}

const usersData: User[] = [
  {
    id: "1",
    FullName: "John Doe",
    Email: "johndoe@example.com",
    PhoneNumber: "1234567890",
    Gender: "Male",
    CreatedAt: "2022-01-01",
    IsActive: true,
    Occupation: "Software Engineer",
  },
  {
    id: "2",
    FullName: "Jane Smith",
    Email: "janesmith@example.com",
    PhoneNumber: "0987654321",
    Gender: "Female",
    CreatedAt: "2021-11-12",
    IsActive: false,
    Occupation: "Product Manager",
  },
  {
    id: "3",
    FullName: "Michael Brown",
    Email: "michaelb@example.com",
    PhoneNumber: "5555555555",
    Gender: "Male",
    CreatedAt: "2020-06-15",
    IsActive: true,
    Occupation: "Designer",
  },
];

const   UsersList: FC = () => {
  const [users, setUsers] = useState<User[]>(usersData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const confirmToggleStatus = () => {
    if (selectedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id
            ? { ...user, IsActive: !user.IsActive }
            : user
        )
      );
      closeModal();
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.FullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 w-full">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700 tracking-wide">
        User Management
      </h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-neutral-900 text-sm sm:text-base">
          <thead>
            <tr className="bg-neutral-950 text-neutral-300 font-semibold text-xs sm:text-sm tracking-wider">
              <TableHeader label="Full Name" />
              <TableHeader label="Email" />
              <TableHeader label="Phone" />
              <TableHeader label="Gender" />
              <TableHeader label="Occupation" />
              <TableHeader label="Status" />
              <TableHeader label="Actions" />
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 1 ? "bg-zinc-900" : ""}
              >
                <TableData>{user.FullName}</TableData>
                <TableData>{user.Email}</TableData>
                <TableData>{user.PhoneNumber}</TableData>
                <TableData>{user.Gender}</TableData>
                <TableData>{user.Occupation || "N/A"}</TableData>
                <TableData>
                  <div
                    className={`flex gap-1 items-center self-stretch py-0.5 pr-2 pl-1.5 my-auto rounded-2xl ${
                      user.IsActive
                        ? "bg-emerald-950 text-emerald-500"
                        : "bg-red-950 text-red-500"
                    }`}
                  >
                    {user.IsActive ? (
                      <FiUserCheck className="w-4 h-4" />
                    ) : (
                      <FiUserX className="w-4 h-4" />
                    )}
                    <div className="self-stretch my-auto text-xs font-semibold">
                      {user.IsActive ? "Active" : "Inactive"}
                    </div>
                  </div>
                </TableData>
                <TableData className="text-center">
                  <button
                    onClick={() => openModal(user)}
                    className={`text-sm font-semibold rounded-lg px-4 py-2 transition-colors duration-200 ${
                      user.IsActive
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {user.IsActive ? (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={confirmToggleStatus}
        message={`Are you sure you want to ${
          selectedUser?.IsActive ? "block" : "unblock"
        } ${selectedUser?.FullName}?`}
        confirmText={selectedUser?.IsActive ? "Block" : "Unblock"}
      />
    </div>
  );
};

export default UsersList;
