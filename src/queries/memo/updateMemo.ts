import { useMutation, useQueryClient } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { notification } from "antd";
import { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";

export const useUpdateMemo = (setMemo: Dispatch<SetStateAction<string>>) => {
  const queryClient = useQueryClient();
  
  const updateMemo = async (newContent: string) => {
    return await bbeepAxios.patch<{ content: string }>('memo', {
      newContent
    });
  }
  
  return useMutation({
    mutationFn: updateMemo,
    onSuccess: async (e) => {
      await queryClient.invalidateQueries({queryKey: ["memo"]});
      setMemo(e.data.content);
    },
    onError: (e) => {
      notification.open({ message: "메모 저장에 실패했습니다.", description: (e as AxiosError<{ message: string }>).response?.data.message})
    }
  });
}