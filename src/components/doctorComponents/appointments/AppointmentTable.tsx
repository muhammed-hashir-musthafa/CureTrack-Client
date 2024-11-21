// components/AppointmentTable.tsx

import AppointmentRow from "./AppointmentRow";

interface appointment  { _id: string; name: string; appointmentDate:string; status: string; method: string }
interface appointmentTable {
  appointments: appointment[];
  handleAction: (_id: string, status: string)=> void
}


export default function AppointmentTable({appointments, handleAction}: appointmentTable) {
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
            <AppointmentRow key={index}  {...appointment} handleAction={handleAction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}