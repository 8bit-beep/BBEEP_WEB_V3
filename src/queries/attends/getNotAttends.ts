import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {Attend} from "../../types/attend/attend.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {Option} from "../../types/props/dropdownProps.ts";

export const useGetNotAttendsQuery = (filterBy: Option, grade: Option, cls: Option, room: Option) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/not-attend/${filterBy.value}?${filterBy.value === "room" ? `roomName=${room}` : `grade=${grade}&cls=${cls}`}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getNotAttends", filterBy.value, cls.value, grade.value, room.value],
    queryFn: fetchData,
    enabled: !!accessToken,
  });

  return {
    data,
    isLoading,
  };
};
