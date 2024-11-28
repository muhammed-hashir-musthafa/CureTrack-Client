// components/AppointmentRow.tsx
'use client'
import StatusBadge from "./StatusBadge";
import { useState } from "react";

interface AppointmentRowProps {
  _id:string;
  name: string;
  appointmentDate: string;
  status: string;
  handleAction: (_id : string, status: string) => void
}

// export default function AppointmentRow({ _id, name, appointmentDate, status, handleAction }: AppointmentRowProps) {
//   return (
//     <tr className="border-b border-gray-700">
//       <td className="py-3 px-4">{name}</td>
//       <td className="py-3 px-4">{appointmentDate}</td>
//       <td className="py-3 px-4">
//         <StatusBadge status={status} />
//       </td>
//       <td></td>
//       <td className="py-3 px-4">
//                 <select
//                   value={status}
//                   onChange={(e) => handleAction(_id, e.target.value)}
//                   className="p-2 bg-gray-800 text-white rounded focus:outline-none"
//                 >
//                   <option value="confirmed">Schedule</option>
//                   <option value="canceled">Cancel</option>
//                   <option value="completed">Complete</option>
//                 </select>
//               </td>
//     </tr>
//   );
// }
export default function AppointmentRow({ _id, name, appointmentDate, status, handleAction }: AppointmentRowProps) {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-4">{name}</td>
      <td className="py-3 px-4">{appointmentDate}</td>
      <td className="py-3 px-4">
        <StatusBadge status={status} />
      </td>
      <td></td>
      <td className="py-3 px-4">
        <select
          value={status}
          onChange={(e) => handleAction(_id, e.target.value)}
          className="p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700 transition-colors"
        >
          <option
            disabled
            value="pending"
            className="bg-gray-800 text-white hover:bg-gray-600"
          >
            Take Action
          </option>
          <option
            value="confirmed"
            className="bg-gray-800 text-white hover:bg-gray-600"
          >
            Schedule
          </option>
          <option
            value="canceled"
            className="bg-gray-800 text-white hover:bg-gray-600"
          >
            Cancel
          </option>
          <option
            value="completed"
            className="bg-gray-800 text-white hover:bg-gray-600"
          >
            Complete
          </option>
        </select>
      </td>
    </tr>
  );
}


