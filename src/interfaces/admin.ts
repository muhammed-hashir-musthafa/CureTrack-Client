import { JSX, ReactNode } from "react";

//Sidebar Interfaces
export interface LinkItem {
  label: string;
  link: string;
  icon: JSX.Element;
}

export interface SidebarProps {
  role: "admin" | "vendor" | "user" | "doctor";
  onLinkClick: () => void;
}

export interface NavLinkProps {
  el: LinkItem;
}

export interface Vendors {
  vendor: {
    name: string;
    initials: string;
    bgColor: string;
    place: string;
    vendorType: string;
    contact: string;
  };
  date: string;
  status: {
    text: string;
    color: string;
    bgColor: string;
    icon: string | ReactNode;
  };
}
export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface OtpValue {
  otp: string;
  email: string;  
}

export interface vendorSignupFormValues {
  name:string
  email: string;
  phoneNumber: string;
  role:string
  licenseNumber:string
  password: string;
}