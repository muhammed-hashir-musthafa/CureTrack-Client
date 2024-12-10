"use client";
import React, { useState } from "react";
import Table from "../../ui/Table/Table";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import DateFilter from "@/components/baseComponents/ui/DateFilter/DateFilter";

interface Doctor {
  name: string;
  avatar: string;
}

interface Hospital {
  name: string;
  avatar: string;
}

interface MedicalRecord {
  healthIssue: string;
  category: string;
  doctor: Doctor;
  hospital: Hospital;
  date: string; // Format: DD-MM-YYYY
}

/**
 * Converts a date from YYYY-MM-DD to DD-MM-YYYY format.
 */
const toDisplayFormat = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
};

/**
 * Converts a date from DD-MM-YYYY to YYYY-MM-DD format.
 */
const toISOFormat = (date: string): string => {
  const [day, month, year] = date.split("-");
  return `${year}-${month}-${day}`;
};

/**
 * Checks if a date is within a given range.
 */
const isWithinRange = (date: string, range: [string, string]) => {
  const isoDate = new Date(toISOFormat(date)).getTime();
  const [start, end] = range.map((d) => new Date(toISOFormat(d)).getTime());
  return isoDate >= start && isoDate <= end;
};

const MedicalHistory: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("All");
  const [selectedHospital, setSelectedHospital] = useState<string>("All");
  const [selectedHealthIssue, setSelectedHealthIssue] = useState<string>("All");
  const [dateFilter, setDateFilter] = useState<{
    type: string;
    value?: [string, string];
  }>({
    type: "All",
  });

  const data: MedicalRecord[] = [
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "10-12-2024",
    },
    {
      healthIssue: "Cancer",
      category: "Oncology",
      doctor: { name: "Dr. Natali Craig", avatar: "/doctor2.png" },
      hospital: { name: "Natali Craig", avatar: "/hospital2.png" },
      date: "07-02-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-12-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-11-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-09-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-10-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-08-2024",
    },
    {
      healthIssue: "Fever",
      category: "General",
      doctor: { name: "Dr. Phoenix Baker", avatar: "/doctor1.png" },
      hospital: { name: "Phoenix Baker", avatar: "/hospital1.png" },
      date: "12-01-2024",
    },
    {
      healthIssue: "Cancer",
      category: "Oncology",
      doctor: { name: "Dr. Natali Craig", avatar: "/doctor2.png" },
      hospital: { name: "Natali Craig", avatar: "/hospital2.png" },
      date: "24-07-2024",
    },
  ];

  const specialties = ["All", ...new Set(data.map((item) => item.category))];
  const doctors = ["All", ...new Set(data.map((item) => item.doctor.name))];
  const hospitals = ["All", ...new Set(data.map((item) => item.hospital.name))];
  const healthIssues = [
    "All",
    ...new Set(data.map((item) => item.healthIssue)),
  ];

  /**
   * Clears all filters and resets to default values.
   */
  const clearFilters = () => {
    setSelectedSpecialty("All");
    setSelectedDoctor("All");
    setSelectedHospital("All");
    setSelectedHealthIssue("All");
    setDateFilter({ type: "All" });
  };

  const filteredData = data.filter((item) => {
    const matchSpecialty =
      selectedSpecialty === "All" || item.category === selectedSpecialty;
    const matchDoctor =
      selectedDoctor === "All" || item.doctor.name === selectedDoctor;
    const matchHospital =
      selectedHospital === "All" || item.hospital.name === selectedHospital;
    const matchHealthIssue =
      selectedHealthIssue === "All" || item.healthIssue === selectedHealthIssue;

    let matchDate = true;
    if (dateFilter.type === "Range" && dateFilter.value) {
      matchDate = isWithinRange(item.date, dateFilter.value);
    } else if (dateFilter.type === "Last 7 Days") {
      const now = new Date();
      const sevenDaysAgo = new Date(now);
      sevenDaysAgo.setDate(now.getDate() - 7);
      matchDate = isWithinRange(item.date, [
        toDisplayFormat(sevenDaysAgo.toISOString().split("T")[0]),
        toDisplayFormat(now.toISOString().split("T")[0]),
      ]);
    } else if (dateFilter.type === "Last 30 Days") {
      const now = new Date();
      const thirtyDaysAgo = new Date(now);
      thirtyDaysAgo.setDate(now.getDate() - 30);
      matchDate = isWithinRange(item.date, [
        toDisplayFormat(thirtyDaysAgo.toISOString().split("T")[0]),
        toDisplayFormat(now.toISOString().split("T")[0]),
      ]);
    } else if (dateFilter.type === "This Month") {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      matchDate = isWithinRange(item.date, [
        toDisplayFormat(startOfMonth.toISOString().split("T")[0]),
        toDisplayFormat(endOfMonth.toISOString().split("T")[0]),
      ]);
    } else if (dateFilter.type === "Last Month") {
      const now = new Date();
      const startOfLastMonth = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        1
      );
      const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      matchDate = isWithinRange(item.date, [
        toDisplayFormat(startOfLastMonth.toISOString().split("T")[0]),
        toDisplayFormat(endOfLastMonth.toISOString().split("T")[0]),
      ]);
    }

    return (
      matchSpecialty &&
      matchDoctor &&
      matchHospital &&
      matchHealthIssue &&
      matchDate
    );
  });

  const transformedData = filteredData.map((item) => ({
    ...item,
    date: toDisplayFormat(item.date), // Ensure displayed dates are in DD-MM-YYYY format
  }));

  return (
    <div className="p-4 bg-black h-full w-full">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4 mt-20">
        <Dropdown
          value={selectedHealthIssue}
          options={healthIssues}
          // placeholder="Select Health Issue"
          onChange={(selectedOption: { value: string }) =>
            setSelectedHealthIssue(selectedOption.value)
          }
        />
        <Dropdown
          value={selectedSpecialty}
          options={specialties}
          // placeholder="Select Specialty"
          onChange={(selectedOption: { value: string }) =>
            setSelectedSpecialty(selectedOption.value)
          }
        />
        <Dropdown
          value={selectedDoctor}
          options={doctors}
          // placeholder="Select Doctor"
          onChange={(selectedOption: { value: string }) =>
            setSelectedDoctor(selectedOption.value)
          }
        />
        <Dropdown
          value={selectedHospital}
          options={hospitals}
          // placeholder="Select Hospital"
          onChange={(selectedOption: { value: string }) =>
            setSelectedHospital(selectedOption.value)
          }
        />

        <DateFilter
          value={dateFilter}
          onChange={(filter) => setDateFilter(filter)}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
      <Table data={transformedData} />
    </div>
  );
};

export default MedicalHistory;
