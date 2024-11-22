import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsersApi, toggleUserStatusApi, searchUsersApi } from "@/api/adminApi/adminApi";

export const useAdminUsers = (page: number, limit: number) => {
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => fetchUsersApi(page, limit),
  });

  const toggleUserStatusMutation = useMutation({
    mutationFn: async (data: { userId: string; isBlocked: boolean }) => {
      const { userId, isBlocked } = data;
      return toggleUserStatusApi(userId, isBlocked);
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["users"], (oldUsers: any) =>
        oldUsers?.map((user: any) =>
          user.id === updatedUser.id ? updatedUser : user
        ) || []
      );
    },
  });

  const searchQueryMutation = useMutation({
    mutationFn: (searchQuery: string) => searchUsersApi(searchQuery),
    onSuccess: (searchResults) => {
      queryClient.setQueryData(["users"], () => searchResults.data);
    },
  });

  return { 
    usersQuery, 
    toggleUserStatusMutation, 
    searchQueryMutation 
  };
};
