import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token";
import { cookie } from "../../utils/tokenStore";
import bbeepAxios from "../../libs/axios/customAxios";
import { notification } from "antd";
import { AxiosError } from "axios";

export const useEditLongAbsence = (id: number) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  const queryClient = useQueryClient();

  const updateData = async (data: { grade: number; cls: number; num: number; startDate: string; endDate: string; reason: string }) => {
    if(accessToken && data.num > 0 && data.startDate && data.endDate && new Date(data.startDate) < new Date(data.endDate)) {
      await bbeepAxios.patch(`/long-absences/${id}`, data);
    }else{
      Promise.reject("권한또는 데이터가 없습니다.");
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