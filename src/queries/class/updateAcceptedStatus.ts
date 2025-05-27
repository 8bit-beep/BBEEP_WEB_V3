import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import { notification } from "antd";
import { AxiosError } from "axios";

export const useUpdateAcceptedStatus = (grade: number, cls: number, num: number, status: AttendStatus, period: number) => {
  const queryClient = useQueryClient();
  
  const updateAcceptedStatus = async () => {
    return await bbeepAxios.patch('/students/pre-attend', {
      grade,
      cls,
      num,
      status,
      period,
    })
  };

  return useMutation({
    mutationFn: updateAcceptedStatus,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getStudentByClass", grade, cls] });
    },
    onError: (e) => {
      notification.open({ message: "출석 상태 변경 실패", description: (e as AxiosError<{ message: string }>).response?.data.message});
    }
  });
}