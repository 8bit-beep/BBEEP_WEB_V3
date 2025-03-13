import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {BaseResponse} from "../../types/response/baseResponse.ts";
import {User} from "../../types/user/user.ts";
import {useState} from "react";
// import {useNavigate} from "react-router-dom";

export const useGetme = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const [me, setMe] = useState<User | null>(null);
  // const navigate = useNavigate();
  
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<User>>(`/users/me`);
    setMe(data.data);
    // if (data.data.email.includes("@dgsw.hs.kr") && data.data.username !== "김태우") {
    //   navigate(`/forbidden`);
    // }
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
