import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {BaseResponse} from "../../types/response/baseResponse.ts";
import {User} from "../../types/user/user.ts";
import {useState} from "react";

export const useGetme = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const [me, setMe] = useState<User | null>(null);
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<User>>(`/users/me`);
    setMe(data.data);
    return data.data;
  };
  useQuery({
    queryKey: ["me", accessToken],
    queryFn: fetchData,
    enabled: !!accessToken,
  });
  
  const initUser = () => {
    setMe(null);
  }

  return {
    me,
    initUser,
  };
};
