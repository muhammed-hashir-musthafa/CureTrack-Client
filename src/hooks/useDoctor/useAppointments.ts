import { useQuery, useMutation } from 'react-query';
import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
import axios from "axios";

export default function useAppointments() {
  const { setAppointments } = useAppointmentStore();

  // Fetch appointments
  const fetchAppointments = async () => {
    const { data } = await axios.get("http://localhost:5001/appointment/api/appointments/upcoming");
    return data.data;
  };

  const { data, isLoading, error } = useQuery("appointments", fetchAppointments, {
    onSuccess: (appointments) => {
      setAppointments(appointments); // Store data in Zustand
    },
  });

  // Update status mutation
  // const updateStatus = useMutation(
  //   async ({ _id, status }: { _id: string; status: string }) => {
  //     const {updateStatus} = useAppointmentStore()
  //     await axios.patch(`http://localhost:5001/appointment/api/appointments/${_id}/status`, { status });

  //   }
  // );
  const updateStatus = useMutation(
    async ({ _id, status }: { _id: string; status: string }) => {
      await axios.patch(`http://localhost:5001/appointment/api/appointments/${_id}/status`, { status });
    }
  );

  return { appointments: data, isLoading, error, updateStatus };
}