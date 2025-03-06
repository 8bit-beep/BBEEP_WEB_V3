import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { NotAttend } from "../../types/attend/notAttend";
import { BaseResponse } from "../../types/response/baseResponse";

export const useGetNotAttendsQuery = (isToday: boolean) => {
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<NotAttend[]>>(
      `/not-attends?isToday=${isToday}`
    );
    return data.data;
  };

  const { data } = useQuery({
    queryKey: ["getNotAttends", isToday],
    queryFn: fetchData,
  });

  return data;
};
