// components/AppointmentRow.tsx

import StatusBadge from "./StatusBadge";

interface AppointmentRowProps {
  name: string;
  date: string;
  status: string;
  method: string;
}

export default function AppointmentRow({ name, date, status, method }: AppointmentRowProps) {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-4">{name}</td>
      <td className="py-3 px-4">{date}</td>
      <td className="py-3 px-4">
        <StatusBadge status={status} />
      </td>
      <td className="py-3 px-4">{method}</td>
      <td className="py-3 px-4 text-red-500 cursor-pointer">Cancel</td>
    </tr>
  );
}