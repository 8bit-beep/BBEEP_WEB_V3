import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {BaseResponse} from "../../types/response/baseResponse.ts";
import {User} from "../../types/user/user.ts";

export const useGetme = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<User>>(`/users/me`);
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["me", accessToken],
    queryFn: fetchData,
    enabled: !!accessToken,
  });

  return data;
};
