"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Ensure you have react-datepicker installed
import "react-datepicker/dist/react-datepicker.css";

interface DateFilterProps {
  value: { type: string; value?: [string, string] };
  onChange: (filter: { type: string; value?: [string, string] }) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ value, onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedType, setSelectedType] = useState<string>(value.type || "All");

  const predefinedFilters = [
    "All",
    "Single Date",
    "Range",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
  ];

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedType(selected);
    onChange({ type: selected, value: undefined });

    // Reset dates if switching filter type
    if (selected !== "Range") {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleSingleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      onChange({ type: "Single Date", value: [formattedDate, formattedDate] });
    }
  };

  const handleRangeChange = () => {
    if (startDate && endDate) {
      const formattedStart = startDate.toISOString().split("T")[0];
      const formattedEnd = endDate.toISOString().split("T")[0];
      onChange({ type: "Range", value: [formattedStart, formattedEnd] });
    }
  };

  return (
    <div className="flex flex-col gap-2 text-black bg-black">
      {/* Dropdown for selecting filter type */}
      <select
        value={selectedType}
        onChange={handleTypeChange}
        className="border border-gray-300 rounded p-2"
      >
        {predefinedFilters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>

      {/* Date inputs based on selected type */}
      {selectedType === "Single Date" && (
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            handleSingleDateChange(date);
          }}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select a date"
          className="border border-gray-300 rounded p-2"
        />
      )}

      {selectedType === "Range" && (
        <div className="flex gap-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd-MM-yyyy"
            placeholderText="Start date"
            className="border border-gray-300 rounded p-2"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd-MM-yyyy"
            placeholderText="End date"
            className="border border-gray-300 rounded p-2"
          />
          <button
            onClick={handleRangeChange}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
