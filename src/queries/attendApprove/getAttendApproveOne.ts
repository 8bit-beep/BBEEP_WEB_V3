import { useQuery } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token"
import bbeepAxios from "../../libs/axios/customAxios";
import { cookie } from "../../utils/tokenStore"
import { ApproveItem } from "../../types/approve/approveItem";
import { RoomName } from "../../types/enums/roomName";

export const useGetAttendApproveOneQuery = (roomName: RoomName | null) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    const { data } = await bbeepAxios.get<ApproveItem>(`/approve/${roomName}`);
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["approve", roomName],
    queryFn: fetchData,
    enabled: !!accessToken && !!roomName
  });

  return {
    data,
    isLoading
  }
}
