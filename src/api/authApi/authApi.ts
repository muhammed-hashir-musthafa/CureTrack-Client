import {
  LoginFormValues,
  OtpValue,
  SignUpFormValues,
} from "@/interfaces/admin";
import { LoginResponse } from "@/interfaces/common";
import axiosInstance from "@/lib/axiosInterceptor";
import { AxiosResponse } from "axios";

export const signupAdmin = async (
  userData: SignUpFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/admin/signup", userData);
  return response.data;
};

export const login = async (
  credentials: LoginFormValues
): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/login", credentials);
  console.log(response.data)
  return response.data;
};

export const otpVerification = async (otp: OtpValue): Promise<any> => {
  const response = await axiosInstance.post("/verify-otp", otp);
  return response.data;
};
