// /app/hooks/dropDownHooks.ts
"use client"
import { useState } from "react";

export const useVendorTypeDropdown = () => {
  const [selected, setSelected] = useState("All");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, handleSelect };
};

export const useStatusDropdown = () => {
  const [selected, setSelected] = useState("All");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, handleSelect };
};

// Dropdown options
export const vendorTypes = ["All", "Hospital", "Clinic", "Pharmacy"];
export const statusOptions = ["All", "Approved", "Pending", "Rejected"];
