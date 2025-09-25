import { useQuery } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token";
import bbeepAxios from "../../libs/axios/customAxios";
import { cookie } from "../../utils/tokenStore";

export const useGetMemo = () => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    const { data } = await bbeepAxios.get<{ content: string }>(`/memo`);
    return data;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["memo"],
    queryFn: fetchData,
    enabled: !!accessToken,
  });


  return { data, isLoading, refetch };
};
