import { useMutation } from "@tanstack/react-query";
import { doctorSignUpApi } from "@/api/authApi/authApi";
import { DctorSignUpFormValues } from "@/interfaces/doctor";
import { AxiosResponse, AxiosError } from "axios";
import toast from "react-hot-toast";

interface ErrorResponse {
  message?: string;
  errors?: string[];
}

const useDoctorSignup = () => {
  const mutation = useMutation<
    AxiosResponse<any>,
    AxiosError,
    DctorSignUpFormValues
  >({
    mutationFn: doctorSignUpApi,
    onError: (error: AxiosError) => {
      if (error.response) {
        const errorData = error.response.data as ErrorResponse;

        if (errorData.message) {
          toast.error(errorData.message);
        } else if (error.response.status === 409) {
          toast.error(
            "Email already exists. Please use a different email address."
          );
        } else {
          toast.error("Server error: Please try again later.");
        }
      } else {
        toast.error("Network error: Please check your connection.");
      }
    },
    onSuccess: (data: AxiosResponse<any>) => {},
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
