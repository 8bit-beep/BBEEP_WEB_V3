import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token";
import { cookie } from "../../utils/tokenStore";
import bbeepAxios from "../../libs/axios/customAxios";
import { notification } from "antd";
import { AxiosError } from "axios";

export const useEditLongAbsence = (id: number) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  const queryClient = useQueryClient();

  const updateData = async (data: { startDate: string; endDate: string; reason: string }) => {
    if(!accessToken) {
      await Promise.reject();
    }
    if(data.startDate && data.endDate && new Date(data.startDate) < new Date(data.endDate) && data.reason.trim().length > 0) {
      await bbeepAxios.patch(`/long-absences/${id}`, data);
    }else{
      notification.open({ message: "장기 결석자 수정 실패", description: "장기 결석자 수정 정보가 모두 기입되었는지, 장기 결석 시작일이 종료일과 같거나 더 늦지 않는지 확인해주세요." })
      await Promise.reject();
    }
  }

  return useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["longAbsence"] });
    },
    onError: (e) => {
      notification.open({ message: "장기 결석자 등록 실패", description: (e as AxiosError<{ message: string }>).response?.data.message});
    }
  })
}
