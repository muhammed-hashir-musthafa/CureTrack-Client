import { useMutation } from "@tanstack/react-query";
import { doctorSignUpApi } from "@/api/authApi/authApi";
import { DctorSignUpFormValues } from "@/interfaces/doctor";
import { AxiosResponse } from "axios";

const useDoctorSignup = () => {
  const mutation = useMutation<AxiosResponse<any>, Error, DctorSignUpFormValues>({
    mutationFn: doctorSignUpApi,
    onError: (error: Error) => {
      console.error("Error during signup:", error.message);
    },
    onSuccess: (data: AxiosResponse<any>) => {
      console.log("Doctor signed up successfully:", data);
    },
  });

  return {
    doctorSignUp: mutation.mutate,   
    isLoading: mutation.isPending,   
    isError: mutation.isError,      
    error: mutation.error,          
    isSuccess: mutation.isSuccess,   
    data: mutation.data,           
  };
};

export default useDoctorSignup;
