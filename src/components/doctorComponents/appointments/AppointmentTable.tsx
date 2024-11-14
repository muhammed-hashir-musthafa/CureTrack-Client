// components/AppointmentTable.tsx

import AppointmentRow from "./AppointmentRow";

const appointments = [
  { name: "Erfan PV", date: "Jan 4, 2024", status: "Scheduled", method: "Video Consultation" },
  { name: "Hashir Musthafa", date: "Jan 2, 2024", status: "Pending", method: "Person Consultation" },
  // Add other appointments here
];

export default function AppointmentTable() {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">Patient</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Consultation methods</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <AppointmentRow key={index} {...appointment} />
          ))}
        </tbody>
      </table>
    </div>
  );
}