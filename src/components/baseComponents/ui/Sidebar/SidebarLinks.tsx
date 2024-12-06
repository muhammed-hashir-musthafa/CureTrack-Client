import {
  HiOutlineViewGrid,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineChat,
  HiOutlineBeaker,
} from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import {
  MdMedicalServices,
  MdLocalPharmacy,
  MdOutlineScience,
} from "react-icons/md";
import { LinkItem } from "@/interfaces/admin";

export const linksByRole: Record<string, LinkItem[]> = {
  admin: [
    { label: "Dashboard", link: "/admin/dashboard", icon: <HiOutlineViewGrid /> },
    {
      label: "Approval Page",
      link: "/admin/approval-page",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Vendors List", link: "/admin/vendors-list", icon: <FiFileText /> },
    { label: "Doctors", link: "/admin/doctors", icon: <MdMedicalServices /> },
    { label: "Users", link: "/admin/users", icon: <HiOutlineUserGroup /> },
    { label: "Messages", link: "/admin/messages", icon: <HiOutlineChat /> },
  ],
  user: [
    { label: "Profile", link: "profile", icon: <HiOutlineUserGroup /> },
    { label: "Health Data", link: "health-data", icon: <FiFileText /> },
    {
      label: "Appointments",
      link: "appointments",
      icon: <HiOutlineCheckCircle />,
    },
  ],
  hospital: [
    { label: "Dashboard", link: "/hospital/dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Patients", link: "/hospital/patients", icon: <HiOutlineUserGroup /> },
    {
      label: "Appointments",
      link: "/hospital/appointments",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Doctors", link: "/hospital/doctors", icon: <MdMedicalServices /> },
    { label: "Lab", link: "/hospital/lab", icon: <HiOutlineBeaker /> },
    { label: "Facilities", link: "/hospital/facilities", icon: <FiFileText /> },
    { label: "Messages", link: "/hospital/messages", icon: <HiOutlineChat /> },
  ],
  pharmacy: [
    { label: "Dashboard", link: "/pharmacy/dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Medicines", link: "/pharmacy/medicines", icon: <MdLocalPharmacy /> },
    { label: "Orders", link: "/pharmacy/orders", icon: <HiOutlineCheckCircle /> },
    {
      label: "Stock Management",
      link: "/pharmacy/stock-management",
      icon: <FiFileText />,
    },
    { label: "Messages", link: "/pharmacy/messages", icon: <HiOutlineChat /> },
  ],
  lab: [
    { label: "Dashboard", link: "/lab/dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Tests", link: "/lab/tests", icon: <MdOutlineScience /> },
    { label: "Reports", link: "/lab/reports", icon: <FiFileText /> },
    { label: "Orders", link: "/lab/orders", icon: <HiOutlineCheckCircle /> },
    { label: "Messages", link: "/lab/messages", icon: <HiOutlineChat /> },
  ],
  doctor: [
    { label: "Dashboard", link: "/doctor/dashboard", icon: <HiOutlineCheckCircle /> },
    {
      label: "All Appointments",
      link: "/doctor/appointments",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Patients", link: "/doctor/patientss", icon: <FiFileText /> },
  ],
};
