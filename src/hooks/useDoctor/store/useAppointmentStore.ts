import Appointments from "@/app/doctor/appointments-page/page";
import { create } from "zustand";

interface Appointment {
  _id: string;
  name: string;
  date: string;
  status: string;
  method: string;
  appointmentDate: string
}

interface AppointmentStore {
  appointments: Appointment[];
  upcomingAppointments: Appointment[];
  pastAppointments: Appointment[];
  filteredAppointments: Appointment[];
  setAppointments: (appointments: Appointment[]) => void;
  updateStatusState: (_id: string, status: string) => void;
  filteredAppointmentsByOption: (option: string) => void;
  filterByStatus: (status: string)=> void // Add this function
}

// const useAppointmentStore = create<AppointmentStore>((set) => ({
//   appointments: [],
//   upcomingAppointments: [],
//   filteredAppointments:[],
//   pastAppointments: [],
//   setAppointments: (appointments) => 
//     set(()=>{
//       console.log('done', appointments)
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       const upcomingAppintments = appointments.filter(appointment => appointment.appointmentDate &&  new Date(appointment.appointmentDate) > today)
//       const pastAppointments =  appointments.filter(appointment => appointment.appointmentDate &&  new Date(appointment.appointmentDate) < today)
//       console.log(pastAppointments)
//     return{ appointments:appointments, 
//             filteredAppointments:upcomingAppintments, 
//             upcomingAppointments:upcomingAppintments, 
//             pastAppointments:pastAppointments}}),
//   updateStatusState: (_id, status) =>
//     set((state) => { 
//       return({
//       appointments: state.appointments.map((appointment) =>
//         appointment._id === _id ? { ...appointment, status } : appointment
//       ),
//       filteredAppointments: state.filteredAppointments.map((appointment) =>
//       appointment._id === _id ? { ...appointment, status } : appointment
//       ),
//       upcomingAppointments: state.upcomingAppointments.map((appointment) =>
//       appointment._id === _id ? { ...appointment, status } : appointment
//       ),
//       pastAppointments: state.pastAppointments.map((appointment) =>
//       appointment._id === _id ? { ...appointment, status } : appointment
//       )
//     })}),
//   filteredAppointmentsByOption: (option)=>
//     set((state)=>{
//       console.log('state', state)
//       if(option === 'pending'){
//         return ({
//             filteredAppointments: state.upcomingAppointments.filter((appointment => appointment.status === option)),
//             pastAppointments:state.pastAppointments
//         })
//       }else if(option === 'upcoming'){
//         return({filteredAppointments: state.upcomingAppointments,pastAppointments: state.pastAppointments})
//       }else if (option === 'past'){
//         const today = new Date();
//       today.setHours(0, 0, 0, 0);
//         console.log('past')
//         return ({filteredAppointments: state.appointments.filter(appointment => appointment.appointmentDate &&  new Date(appointment.appointmentDate) < today)})
//       }
//       else {
//         return ({ 
//           filteredAppointments: state.appointments
//         })
//       }
//     }),
//     filterByStatus: (status:string ) =>
//     set((state) => {
//       return ({
//         filteredAppointments: state.appointments.filter((appointment)=> appointment.status === status)
//       })
//     })
// }));


const useAppointmentStore = create<AppointmentStore>((set) => ({
  appointments: [],
  upcomingAppointments: [],
  filteredAppointments: [],
  pastAppointments: [],
  
  setAppointments: (appointments) => {
    set(() => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const upcomingAppointments = appointments.filter(
        (appointment) => appointment.appointmentDate && new Date(appointment.appointmentDate) > today
      );

      const pastAppointments = appointments.filter(
        (appointment) => appointment.appointmentDate && new Date(appointment.appointmentDate) < today
      );

      return {
        appointments,
        filteredAppointments: upcomingAppointments,
        upcomingAppointments,
        pastAppointments,
      };
    });
  },

  updateStatusState: (_id, status) =>
    set((state) => {
      const updateStatus = (appointments: Appointment[]) =>
        appointments.map((appointment) =>
          appointment._id === _id ? { ...appointment, status } : appointment
        );

      return {
        appointments: updateStatus(state.appointments),
        filteredAppointments: updateStatus(state.filteredAppointments),
        upcomingAppointments: updateStatus(state.upcomingAppointments),
        pastAppointments: updateStatus(state.pastAppointments),
      };
    }),

  filteredAppointmentsByOption: (option) =>
    set((state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let filtered = state.appointments;

      if (option === "pending") {
        filtered = state.upcomingAppointments.filter(
          (appointment) => appointment.status === option
        );
      } else if (option === "upcoming") {
        filtered = state.upcomingAppointments;
      } else if (option === "past") {
        filtered = state.appointments.filter(
          (appointment) =>
            appointment.appointmentDate &&
            new Date(appointment.appointmentDate) < today
        );
      }

      return { filteredAppointments: filtered };
    }),
  filterByStatus: (status) =>
    set((state) => ({
      filteredAppointments: state.appointments.filter(
        (appointment) => appointment.status === status
      ),
    })),
}));
export default useAppointmentStore;
