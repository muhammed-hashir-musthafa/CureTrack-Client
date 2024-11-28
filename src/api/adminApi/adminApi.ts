import axiosInstance from "@/lib/axiosInstance";


//admin-side-users
export const fetchUsersApi = async (page: number, limit: number) => {
  const response = await axiosInstance.get(`/admin/users?page=${page}&limit=${limit}`);
  return response.data;
};

export const toggleUserStatusApi = async (userId: string, isBlocked: boolean) => {
  const response = await axiosInstance.put(`/admin/user/${userId}`, { is_blocked: !isBlocked });
  return response.data;
};

export const searchUsersApi = async (searchQuery: string) => {
  const response = await axiosInstance.get(`/admin/users/search?searchQuery=${searchQuery}`);
  return response.data;
};


//admin-side-doctors
export const fetchDoctorsApi = async (page: number, limit: number) => {
  const response = await axiosInstance.get(`/admin/doctors?page=${page}&limit=${limit}`);
  return response.data;
};

export const toggleDoctorStatusApi = async (doctorId: string, isBlocked: boolean) => {
  const response = await axiosInstance.put(`/admin/doctor/${doctorId}`, { is_blocked: !isBlocked });
  return response.data;
};

export const searchDoctorsApi = async (searchQuery: string) => {
  const response = await axiosInstance.get(`/admin/doctors/search?searchQuery=${searchQuery}`);
  return response.data;
};

export const getDoctorByIdApi = async (doctorId: string) => {
  const response = await axiosInstance.get(`/api/doctor/${doctorId}`);
  return response.data;
};
