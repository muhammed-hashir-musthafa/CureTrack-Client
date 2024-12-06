import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { VendorsResponse } from "@/interfaces/common";
import { getvendorByIdApi } from "@/api/baseApi/baseApi";

// Custom hook with proper typing
export const useVendorProfile = (
  vendorId: string,
  isUser: boolean
): UseQueryResult<VendorsResponse, Error> => {
  return useQuery<VendorsResponse, Error>({
    queryKey: ["vendorProfile", vendorId], // Query key
    queryFn: () => getvendorByIdApi(vendorId, isUser), // Query function
    enabled: !!vendorId, // Prevent query if vendorId is falsy
    staleTime: 5 * 60 * 1000, // Cache validity (5 minutes)
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
};
