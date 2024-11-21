// pages/appointments.tsx
// 'use client'
// import SearchBar from "@/components/doctorComponents/appointments/SearchBar";
// import FilterDropdown from "@/components/doctorComponents/appointments/FilterDropdown";
// import AppointmentTable from "@/components/doctorComponents/appointments/AppointmentTable";
// import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
// import useAppointments from "@/hooks/useDoctor/useAppointments";


// export default function Appointments() {
  
//   const { isLoading, error, updateStatus } = useAppointments();
//   const { upcomingAppointments,filteredAppointments,pastAppointments, appointments, filteredAppointmentsByOption, updateStatusState } = useAppointmentStore();
//   const handleAction = (_id: string, status:string)=>{
//     updateStatusState(_id, status)
//     updateStatus.mutate({_id, status})

//   }
//   console.log('allAppointments:', appointments)
//   console.log('filteredAppointments', filteredAppointments)
//   console.log('upcomingAppointments', upcomingAppointments)
//   console.log('pastAppointments', pastAppointments)
//   if (isLoading) {
//     return <div>Loading appointments...</div>;
//   }

//   if (error) {
//     return <div>Error loading appointments. Please try again later.</div>;
//   }

//   return (
//     <div className="p-6 bg-gray-900 flex flex-col h-full w-full text-white">
//       <h1 className="text-xl font-semibold mb-6 text-gray-400">Start day with managing new appointments</h1>
//       <div className="flex justify-between mb-4">
//         <SearchBar placeholder="Hinted search text" />
//         <FilterDropdown />
//       </div>
//       <div>
//         <div className="flex gap-5">
//           <h1 className="cursor-pointer" onClick={()=> filteredAppointmentsByOption('upcoming')}>Upcoming</h1>
//           <h1 className="cursor-pointer" onClick={()=> filteredAppointmentsByOption('pending')}>Pending</h1>
//           <h1 className="cursor-pointer" onClick={()=> filteredAppointmentsByOption('past')}>Past</h1>
//         </div>
        
//         <AppointmentTable appointments={filteredAppointments} handleAction={handleAction}/>
//       </div>
      
//     </div>
//   );
// }
'use client'

import SearchBar from "@/components/doctorComponents/appointments/SearchBar";
import FilterDropdown from "@/components/doctorComponents/appointments/FilterDropdown";
import AppointmentTable from "@/components/doctorComponents/appointments/AppointmentTable";
import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
import useAppointments from "@/hooks/useDoctor/useAppointments";

export default function Appointments() {
  const { isLoading, error, updateStatus } = useAppointments();
  const {
    upcomingAppointments,
    filteredAppointments,
    pastAppointments,
    appointments,
    filteredAppointmentsByOption,
    updateStatusState,
  } = useAppointmentStore();

  const handleAction = (_id: string, status: string) => {
    updateStatusState(_id, status);
    updateStatus.mutate({ _id, status });
  };

  console.log("allAppointments:", appointments);
  console.log("filteredAppointments:", filteredAppointments);
  console.log("upcomingAppointments:", upcomingAppointments);
  console.log("pastAppointments:", pastAppointments);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold">Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold">
          Error loading appointments. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 flex flex-col h-full w-full text-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-200">
        Start your day by managing new appointments
      </h1>
      <div className="flex justify-between items-center mb-6">
        <SearchBar placeholder="Search appointments..." />
        <FilterDropdown />
      </div>
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <div className="flex gap-6 mb-4">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white"
            onClick={() => filteredAppointmentsByOption("upcoming")}
          >
            Upcoming
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white"
            onClick={() => filteredAppointmentsByOption("pending")}
          >
            Pending
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white"
            onClick={() => filteredAppointmentsByOption("past")}
          >
            Past
          </button>
        </div>
        <AppointmentTable appointments={filteredAppointments} handleAction={handleAction} />
      </div>
    </div>
  );
}