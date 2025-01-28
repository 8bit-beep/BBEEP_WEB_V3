import { useQuery } from "@tanstack/react-query";

import bbeepAxios from "../../libs/axios/customAxios";
import { BaseResponse } from "../../types/response/baseResponse";
import { Attend } from "../../types/attend/attend";
import { RoomOption } from "../../types/rooms/roomOption";

export const useGetAttendsByRoomQuery = (room: RoomOption) => {
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<Attend[]>>(`/attends/rooms?room=${room.value}`);
    return data.data;
  };

  const { data } = useQuery({
    queryKey: ["getAttendsByRoom", room.value],
    queryFn: fetchData,
  });

  return data;
};
