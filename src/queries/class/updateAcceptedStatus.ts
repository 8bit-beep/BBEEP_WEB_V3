import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

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
    }
  });
}