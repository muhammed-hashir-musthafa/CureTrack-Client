import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsersApi, toggleUserStatusApi } from "@/api/adminApi/adminApi";

export const useAdminUsers = (page: number, limit: number) => {
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => getUsersApi(page, limit),
  });

  const toggleUserStatusMutation = useMutation({
    mutationFn: async (data: { userId: string; isActive: boolean }) => {
      const { userId, isActive } = data;
      return toggleUserStatusApi(userId, isActive);
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["users"], (oldUsers: any) =>
        oldUsers?.map((user: any) =>
          user.id === updatedUser.id ? updatedUser : user
        ) || []
      );
    },
  });



  return { 
    usersQuery, 
    toggleUserStatusMutation, 
  };
};
