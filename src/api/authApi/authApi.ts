import {
  LoginFormValues,
  OtpValue,
  SignUpFormValues,
} from "@/interfaces/admin";
import { LoginResponse } from "@/interfaces/common";
import { vendorSignupFormValues } from "@/interfaces/vendor";
import api from "@/lib/axiosIntercepter";
import { AxiosResponse } from "axios";

export const signupAdmin = async (
  userData: SignUpFormValues
): Promise<AxiosResponse<any>> => {
  const response = await api.post("/admin/signup", userData);
  return response.data;
};

export const login = async (
  credentials: LoginFormValues
): Promise<LoginResponse> => {
  const response = await api.post("/login", credentials);
  console.log(response.data);
  return response.data;
};

export const otpVerification = async (otp: OtpValue): Promise<any> => {
  const response = await api.post("/verify-otp", otp);
  return response.data;
};

export const signupVendor = async (
  userData: vendorSignupFormValues
): Promise<AxiosResponse<any>> => {
  const response = await api.post("/vendor/signup", userData);
  return response.data;
};
