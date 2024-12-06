import StatusBadge from "../StatusBadge/StatusBadge";

 
interface AppointmentRowProps {
  name: string;
  date: string;
  time?: string; 
  status: string;
  method: string;
}

export default function AppointmentRow({
  name,
  date,
  time,
  status,
  method,
}: AppointmentRowProps) {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition">  
      <td className="py-3 px-4 text-neutral-300 font-medium">{name}</td>  
      <td className="py-3 px-4 text-neutral-400">{date}</td>{" "}
      <td className="py-3 px-4 text-neutral-400">{time}</td>  
      <td className="py-3 px-4">
        <StatusBadge status={status} />
      </td> 
      <td className="py-3 px-4 text-neutral-300">{method}</td>
       <td className="py-3 px-4">
        <button className="text-red-500 hover:underline">Cancel</button>
      </td>
    </tr>
  );
}
