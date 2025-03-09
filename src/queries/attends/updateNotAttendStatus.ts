import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios.ts";

export const useUpdateNotAttendStatusMutation = (status: AttendStatus, grade: number, cls: number, num: number) => {
  const queryClient = useQueryClient();
  
  const updateAttendStatus = async () => {
    return await bbeepAxios.patch('/students/attend-status', {
      grade,
      cls,
      num,
      status,
    });
  }
  
  return useMutation({
    mutationFn: updateAttendStatus,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ["getNotAttends"]})
    }
  });
}