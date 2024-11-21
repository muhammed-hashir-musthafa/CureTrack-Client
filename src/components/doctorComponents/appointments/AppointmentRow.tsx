// components/AppointmentRow.tsx
'use client'
import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
import StatusBadge from "./StatusBadge";
import useAppointments from "@/hooks/useDoctor/useAppointments";

interface AppointmentRowProps {
  _id:string;
  name: string;
  appointmentDate: string;
  status: string;
  handleAction: (_id : string, status: string) => void
}

export default function AppointmentRow({ _id, name, appointmentDate, status, handleAction }: AppointmentRowProps) {
  const { updateStatusState } = useAppointmentStore();
  const { isLoading, error, updateStatus } = useAppointments();
  // const handleAction = (_id: string, status: string) => {
  //   if (isLoading) return; // Prevent duplicate actions during loading
  //   updateStatus.mutate(
  //     { _id, status },
  //     {
  //       onError: (error) => {
  //         console.log("Failed to update status:", error);
  //       },
  //     }
  //   );
    
  //       updateStatusState(_id, status); // Update Zustand store after success
  // };
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
                  className="p-2 bg-gray-800 text-white rounded focus:outline-none"
                >
                  <option value="confirmed">Schedule</option>
                  <option value="canceled">Cancel</option>
                  <option value="completed">Complete</option>
                </select>
              </td>
    </tr>
  );
}