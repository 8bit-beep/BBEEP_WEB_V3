import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { Attend } from "../../types/attend/attend";
import {RoomName} from "../../types/enums/roomName.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import { cookie } from "../../utils/tokenStore.ts";

export const useGetAttendsByRoomQuery = (room: RoomName | null) => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    const { data } = await bbeepAxios.get<Attend[]>(`/students/room?roomName=${room}`);
    return data;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAttendsByRoom", room],
    queryFn: fetchData,
    enabled: !!accessToken && !!room,
  });


  return { data, isLoading, refetch };
};
