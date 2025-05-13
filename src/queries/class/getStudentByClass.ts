import bbeepAxios from "../../libs/axios/customAxios.ts";
import {Attend} from "../../types/attend/attend.ts";
import {useQuery} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import { cookie } from "../../utils/tokenStore.ts";

export const useGetStudentByClassQuery = (grade: number, cls: number) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/class?grade=${grade}&cls=${cls}`);
    return data;
  }
  
  const { data, isLoading } = useQuery({
    queryKey: ["getStudentByClass", grade, cls],
    queryFn: fetchData,
    enabled: !!accessToken,
  });
  
  return {
    data,
    isLoading,
  }
}