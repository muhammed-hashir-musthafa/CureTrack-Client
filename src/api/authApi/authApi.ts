import axiosInstance from "@/lib/axiosInstance";
import { AxiosResponse } from "axios";
import { DctorSignUpFormValues } from "@/interfaces/doctor";
import { LoginResponse } from "@/interfaces/common";
import { vendorSignupFormValues } from "@/interfaces/vendor";
import { UserSignUpFormValues } from "@/interfaces/user";
import {
  LoginFormValues,
  OtpValue,
  SignUpFormValues,
} from "@/interfaces/admin";

export const doctorSignUpApi = async (
  userData: DctorSignUpFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/doctor/signup", userData);
  return response.data;
};

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
  console.log(response.data);
  return response.data;
};

export const otpVerification = async (otp: OtpValue): Promise<any> => {
  const response = await axiosInstance.post("/verify-otp", otp);
  return response.data;
};

export const signupVendor = async (
  userData: vendorSignupFormValues
): Promise<AxiosResponse<any>> => {
  const response = await axiosInstance.post("/vendor/signup", userData);
  return response.data;
};
export const signupUser = async (
  userData: UserSignUpFormValues
): Promise<any> => {
  try {
    const response = await axiosInstance.post("/user/signup", userData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
