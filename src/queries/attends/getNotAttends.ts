import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {Attend} from "../../types/attend/attend.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";

export const useGetNotAttendsQuery = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/not-attend`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getNotAttends"],
    queryFn: fetchData,
    enabled: !!accessToken,
  });

  return {
    data,
    isLoading,
  };
};
