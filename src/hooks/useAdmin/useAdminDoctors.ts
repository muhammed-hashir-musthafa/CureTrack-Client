
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDoctorsApi, toggleDoctorStatusApi, searchDoctorsApi, getDoctorByIdApi } from "@/api/adminApi/adminApi";

export const useDoctors = (page: number, limit: number) => {
  const queryClient = useQueryClient();

  const doctorsQuery = useQuery({
    queryKey: ["doctors", page, limit],
    queryFn: () => fetchDoctorsApi(page, limit),
  });

  const toggleDoctorStatusMutation = useMutation({
    mutationFn: async (data: { doctorId: string; isBlocked: boolean }) => {
      const { doctorId, isBlocked } = data;
      return toggleDoctorStatusApi(doctorId, isBlocked);
    },
    onSuccess: (updatedDoctor) => {
      queryClient.setQueryData(["doctors"], (oldDoctors: any) =>
        oldDoctors?.map((doctor: any) =>
          doctor.id === updatedDoctor.id ? updatedDoctor : doctor
        ) || []
      );
    },
  });

  const searchDoctorsMutation = useMutation({
    mutationFn: (searchQuery: string) => searchDoctorsApi(searchQuery),
    onSuccess: (searchResults) => {
      queryClient.setQueryData(["doctors"], () => searchResults.data);
    },
  });

  const getDoctorByIdQuery = (doctorId: string) => 
    useQuery({
      queryKey: ["doctor", doctorId],
      queryFn: () => getDoctorByIdApi(doctorId),
    });

  return { 
    doctorsQuery, 
    toggleDoctorStatusMutation, 
    searchDoctorsMutation,
    getDoctorByIdQuery,
  };
};