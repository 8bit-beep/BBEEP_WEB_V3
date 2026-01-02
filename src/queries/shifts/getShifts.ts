import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { Shift } from "../../types/shift/shift";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import { cookie } from "../../utils/tokenStore.ts";

export const useGetShiftsQuery = () => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Shift[]>("/shifts");
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getShifts"],
    queryFn: fetchData,
    enabled: !!accessToken
  });

  return {
    data,
    isLoading,
  };
};
