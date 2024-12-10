import AppointmentTable from "@/components/baseComponents/ui/AppointmentTable/AppointmentTable";

export default function Appointments() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-100 mt-14">
        Manage Your Appointments
      </h1>
      <p className="text-gray-400 mb-8 max-w-2xl text-center">
        Keep track of your upcoming appointments with ease. Filter by status,
        search for specific patients, and view details at a glance.
      </p>
      <div className="w-full max-w-6xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <AppointmentTable />
      </div>
    </div>
  );
}
