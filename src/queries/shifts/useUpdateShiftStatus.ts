import { notification } from "antd";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import { AxiosError } from "axios";

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
    },
    onError: (e) => {
      notification.open({ message: "실이동 승인 상태 변경 실패", description: (e as AxiosError<{ message: string }>).response?.data.message});
    }
  })
}