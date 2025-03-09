import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {useQuery} from "@tanstack/react-query";

export const useGetExcelsQuery = (year: string, month: string) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<string[]>(`/excel/files?year=${year}&month=${month}`);
    return data;
  }
  
  const { data, isLoading } = useQuery({
    queryKey: ["getExcels", year, month],
    queryFn: fetchData,
    enabled: !!accessToken,
  });
  
  return {
    data,
    isLoading,
  }
}