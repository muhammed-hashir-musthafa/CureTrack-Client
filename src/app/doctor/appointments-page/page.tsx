// pages/appointments.tsx

import SearchBar from "@/components/doctorComponents/appointments/SearchBar";
import FilterDropdown from "@/components/doctorComponents/appointments/FilterDropdown";
import AppointmentTable from "@/components/doctorComponents/appointments/AppointmentTable";

export default function Appointments() {
  return (
    <div className="p-6 bg-gray-900 flex flex-col h-full w-full text-white">
      <h1 className="text-xl font-semibold mb-6 text-gray-400">Start day with managing new appointments</h1>
      <div className="flex justify-between mb-4">
        <SearchBar placeholder="Hinted search text" />
        <FilterDropdown />
      </div>
      <AppointmentTable />
    </div>
  );
}