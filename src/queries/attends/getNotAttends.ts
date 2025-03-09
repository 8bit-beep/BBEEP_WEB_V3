import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {Attend} from "../../types/attend/attend.ts";

export const useGetNotAttendsQuery = () => {
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/not-attend`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getNotAttends"],
    queryFn: fetchData,
  });

  return {
    data,
    isLoading,
  };
};
