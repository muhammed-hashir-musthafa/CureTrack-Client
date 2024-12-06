import AppointmentTable from "@/components/baseComponents/ui/AppointmentTable/AppointmentTable";

 
export default function Appointments() {
  return (
    <div className="p-6 bg-gray-900 flex flex-col h-full w-full text-white">
      <h1 className="text-xl font-semibold mb-6 text-gray-400">
        Start day with managing new appointments
      </h1>
      <div className="flex justify-between mb-4"></div>
      <AppointmentTable />
    </div>
  );
}
