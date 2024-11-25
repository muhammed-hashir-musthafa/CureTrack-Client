import axiosInstance from "@/lib/axiosInstance";
import { AxiosResponse } from "axios";
import { DctorSignUpFormValues } from "@/interfaces/doctor";

export const doctorSignUpApi = async (
  userData: DctorSignUpFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/doctor/signup", userData);
  return response.data; 
};
