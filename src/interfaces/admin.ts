import { JSX } from "react";

//Sidebar Interfaces
export interface LinkItem {
  label: string;
  link: string;
  icon: JSX.Element;
}

export interface SidebarProps {
  role: "admin" | "vendor" | "user";
  onLinkClick: () => void;
}

export interface NavLinkProps {
  el: LinkItem;
}
