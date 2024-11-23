import {
  HiOutlineViewGrid,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineChat,
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
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    {
      label: "Approval Page",
      link: "approval-page",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Vendors List", link: "vendors-list", icon: <FiFileText /> },
    { label: "Doctors", link: "doctors", icon: <MdMedicalServices /> },
    { label: "Users", link: "users", icon: <HiOutlineUserGroup /> },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
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
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Patients", link: "patients", icon: <HiOutlineUserGroup /> },
    {
      label: "Appointments",
      link: "appointments",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Doctors", link: "doctors", icon: <MdMedicalServices /> },
    { label: "ICU/Facilities", link: "facilities", icon: <FiFileText /> },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
  ],
  pharmacy: [
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Medicines", link: "medicines", icon: <MdLocalPharmacy /> },
    { label: "Orders", link: "orders", icon: <HiOutlineCheckCircle /> },
    {
      label: "Stock Management",
      link: "stock-management",
      icon: <FiFileText />,
    },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
  ],
  lab: [
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Tests", link: "tests", icon: <MdOutlineScience /> },
    { label: "Reports", link: "reports", icon: <FiFileText /> },
    { label: "Orders", link: "orders", icon: <HiOutlineCheckCircle /> },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
  ],
  doctor: [
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineCheckCircle /> },
    {
      label: "All Appointments",
      link: "appointments",
      icon: <HiOutlineCheckCircle />,
    },
    { label: "Patients", link: "patientss", icon: <FiFileText /> },
  ],
};
