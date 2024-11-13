import {
  LoginFormValues,
  OtpValue,
  SignUpFormValues,
} from "@/interfaces/admin";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosResponse } from "axios";

export const signupAdmin = async (
  userData: SignUpFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/admin/signup", userData);
  return response.data;
};

export const login = async (
  credentials: LoginFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/login", credentials);
  return response.data;
};

export const otpVerification = async (otp: OtpValue): Promise<any> => {
  const response = await axiosInstance.post("/verify-otp", otp);
  return response.data;
};
