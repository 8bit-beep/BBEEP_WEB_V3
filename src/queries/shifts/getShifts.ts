import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { Shift } from "../../types/shift/shift";
import {PageResponse} from "../../types/response/pageResponse.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import { getItemWithExpiry } from "../../utils/tokenStore.ts";

export const useGetShiftsQuery = () => {
  const accessToken = getItemWithExpiry(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<PageResponse<Shift>>("/shifts");
    return data.content;
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
