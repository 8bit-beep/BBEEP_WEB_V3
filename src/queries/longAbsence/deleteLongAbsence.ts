import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token"
import { cookie } from "../../utils/tokenStore"
import bbeepAxios from "../../libs/axios/customAxios";
import { notification } from "antd";
import { AxiosError } from "axios";

export const useDeleteLongAbsence = (id: number) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  const queryClient = useQueryClient();

  const deleteData = async () => {
    if(accessToken){
      await bbeepAxios.delete(`/long-absences/${id}`);
    }else{
      await Promise.reject("권한이 없습니다.");
    }
  }

  return useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["longAbsence"] });
    },
    onError: (e) => {
      notification.open({ message: "장기 결석자 삭제 실패", description: (e as AxiosError<{ message: string }>).response?.data.message});
    }
  })
}
