
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsersApi, toggleDoctorStatusApi, getDoctorByIdApi } from "@/api/adminApi/adminApi";

export const useDoctors = (page: number, limit: number) => {
  const queryClient = useQueryClient();

  const doctorsQuery = useQuery({
    queryKey: ["doctors", page, limit],
    queryFn: () => getUsersApi(page, limit),
  });

  const toggleDoctorStatusMutation = useMutation({
    mutationFn: async (data: { doctorId: string; isActive: boolean }) => {
      const { doctorId, isActive } = data;
      return toggleDoctorStatusApi(doctorId, isActive);
    },
    onSuccess: (updatedDoctor) => {
      queryClient.setQueryData(["doctors"], (oldDoctors: any) =>
        oldDoctors?.map((doctor: any) =>
          doctor.id === updatedDoctor.id ? updatedDoctor : doctor
        ) || []
      );
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
    getDoctorByIdQuery,
  };
};