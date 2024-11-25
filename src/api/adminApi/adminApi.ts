import axiosInstance from "@/lib/axiosInstance";

//admin-sdie-vendors
export const getVendorsApi = async (page: number, limit: number) => {
  const response = await axiosInstance.get(`/admin/vendors?page=${page}&limit=${limit}`);
  return response.data;
};

export const toggleVendorStatusApi = async (doctorId: string, isActive: boolean) => {
  const response = await axiosInstance.put(`/admin/vendor/${doctorId}`, { isActive: !isActive });
  return response.data;
};

export const getvendorByIdApi = async (doctorId: string) => {
  const response = await axiosInstance.get(`/api/vendor/${doctorId}`);
  return response.data;
};

//admin-side-users
export const getUsersApi = async (page: number, limit: number) => {
  const response = await axiosInstance.get(`/admin/users?page=${page}&limit=${limit}`);
  return response.data;
};

export const toggleUserStatusApi = async (userId: string, isActive: boolean) => {
  const response = await axiosInstance.put(`/admin/user/${userId}`, { isActive: !isActive });
  return response.data;
};



//admin-side-doctors
export const getDoctorsApi = async (page: number, limit: number) => {
  const response = await axiosInstance.get(`/admin/doctors?page=${page}&limit=${limit}`);
  return response.data;
};

export const toggleDoctorStatusApi = async (doctorId: string, isActive: boolean) => {
  const response = await axiosInstance.put(`/admin/doctor/${doctorId}`, { isActive: !isActive });
  return response.data;
};


export const getDoctorByIdApi = async (doctorId: string) => {
  const response = await axiosInstance.get(`/api/doctor/${doctorId}`);
  return response.data;
};
