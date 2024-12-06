"use client";
import SearchBar from "@/components/baseComponents/ui/SearchBar/SearchBar";
import React, { ChangeEvent, useState } from "react";

const AppointmentListing = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return <div></div>;
};

export default AppointmentListing;
