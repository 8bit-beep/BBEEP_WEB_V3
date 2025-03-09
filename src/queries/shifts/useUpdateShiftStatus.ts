import bbeepAxios from "../../libs/axios/customAxios.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useUpdateShiftStatus = (status: string) => {
  const queryClient = useQueryClient();
  
  const updateShiftStatus = async (id: string) => {
    return await bbeepAxios.patch(`/shifts/${id}/status?status=${status}`);
  }
  
  return useMutation({
    mutationFn: async (id: string) => {
      return await updateShiftStatus(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getShifts"] });
    }
  })
}