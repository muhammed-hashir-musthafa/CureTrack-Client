import axiosInstance from "@/lib/axiosInstance";
import { AxiosResponse } from "axios";
import { VendorsResponse } from "@/interfaces/common";

export const getvendorByIdApi = async (vendorId: string, isUser: boolean) => {
  const response = await axiosInstance.get(`/api/vendors/${vendorId}`, {
    params: { isUser: isUser.toString() },
  });
  console.log(response.data)
  return response.data;
};

export const getAllVendorsApi = async (
  page: number = 1,
  limit: number = 10,
  vendorRole?: string,
  search?: string,
  isUser: boolean = false,
  specialties?: string
): Promise<AxiosResponse<VendorsResponse>> => {
  const params: Record<string, string | number | boolean> = {
    page,
    limit,
    isUser,
  };

  if (vendorRole) params.vendorRole = vendorRole;
  if (search) params.search = search;
  if (specialties) params.specialties = specialties;

  const response = await axiosInstance.get<VendorsResponse>("/api/vendors", {
    params,
  });
  return response;
};
