import { useQuery, useMutation } from 'react-query';
import useAppointmentStore from "@/hooks/useDoctor/store/useAppointmentStore";
import axios from "axios";

export default function useAppointments() {
  const { setAppointments } = useAppointmentStore();

  // Fetch appointments
  // const fetchAppointments = async () => {
  //   const { data } = await axios.get("http://localhost:5001/appointment/api/appointments/upcoming");
  //   return data.data;
  // };

  // const { data, isLoading, error } = useQuery("appointments", fetchAppointments, {
  //   onSuccess: (appointments) => {
  //     console.log('appointments from onSuccess', appointments)
  //     setAppointments(appointments); // Store data in Zustand
  //   }
  // });


  // Update status mutation
  // const updateStatus = useMutation(
  //   async ({ _id, status }: { _id: string; status: string }) => {
  //     const {updateStatus} = useAppointmentStore()
  //     await axios.patch(`http://localhost:5001/appointment/api/appointments/${_id}/status`, { status });

  //   }
  // );
  const fetchAppointments = async () => {
    const response = await axios.get("http://localhost:5001/appointment/api/appointments/upcoming");
    console.log("API response:", response.data.data); // Debug API response
    return await response.data.data; // Adjust based on actual API response structure
  };

  const {
    data, // Extract the `data` field and rename it to `appointments`
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
    onSuccess: (fetchedAppointments) => {
      console.log("Appointments from onSuccess:", fetchedAppointments);
      // setAppointments(fetchedAppointments); // Store data in Zustand
    },
  });
  console.log('data from data', data)
  const updateStatus = useMutation(
    async ({ _id, status }: { _id: string; status: string }) => {
      await axios.patch(`http://localhost:5001/appointment/api/appointments/${_id}/status`, { status });
    }
  );

  return {  data, isLoading, error: isError, updateStatus };
}