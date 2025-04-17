import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {Attend} from "../../types/attend/attend.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {Option} from "../../types/props/dropdownProps.ts";
import { getItemWithExpiry } from "../../utils/tokenStore.ts";

export const useGetNotAttendsQuery = (filterBy: Option, grade: Option, cls: Option, room: Option) => {
  const accessToken = getItemWithExpiry(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/not-attend/${filterBy.value}?${filterBy.value === "room" ? `roomName=${room.value}` : `grade=${grade.value}&cls=${cls.value}`}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getNotAttends", filterBy.value, grade.value, cls.value, room.value],
    queryFn: fetchData,
    enabled: !!accessToken,
  });

  return {
    data,
    isLoading,
  };
};
