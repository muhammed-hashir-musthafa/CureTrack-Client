import { HiOutlineViewGrid, HiOutlineCheckCircle, HiOutlineUserGroup, HiOutlineChat } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { LinkItem } from "@/interfaces/admin";

export const linksByRole: Record<string, LinkItem[]> = {
  admin: [
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Approval Page", link: "approval-page", icon: <HiOutlineCheckCircle /> },
    { label: "Vendors List", link: "vendors-list", icon: <FiFileText /> },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
    { label: "Users", link: "users", icon: <HiOutlineUserGroup /> },
  ],
  vendor: [
    { label: "Dashboard", link: "dashboard", icon: <HiOutlineViewGrid /> },
    { label: "Products", link: "products", icon: <FiFileText /> },
    { label: "Orders", link: "orders", icon: <HiOutlineCheckCircle /> },
    { label: "Messages", link: "messages", icon: <HiOutlineChat /> },
  ],
  user: [
    { label: "Profile", link: "profile", icon: <HiOutlineUserGroup /> },
    { label: "Health Data", link: "health-data", icon: <FiFileText /> },
    { label: "Appointments", link: "appointments", icon: <HiOutlineCheckCircle /> },
  ],
};
