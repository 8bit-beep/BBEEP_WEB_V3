import { useQuery } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token"
import bbeepAxios from "../../libs/axios/customAxios";
import { cookie } from "../../utils/tokenStore"
import { ApproveItem } from "../../types/attendApprove/approveItem";

export const useGetAttendApproveQuery = () => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    const { data } = await bbeepAxios.get<ApproveItem[]>("/approve");
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["attendApprove"],
    queryFn: fetchData,
    enabled: !!accessToken
  });

  return {
    data,
    isLoading
  }
}