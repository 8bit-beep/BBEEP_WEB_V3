import { useEffect, useState } from "react";
import { Option } from "../../types/props/dropdownProps";
import { useGetAttendsByRoomQuery } from "../../queries/attends/getAttendsByRoom";
import { ROOMS } from "../../constants/rooms/rooms";
import { RoomOption } from "../../types/rooms/roomOption";

export const useGetAttendsByRoom = (floor: Option) => {
  const [room, setRoom] = useState<RoomOption>(ROOMS[0]);
  const attendsData = useGetAttendsByRoomQuery(room);

  useEffect(() => {
    setRoom(floor.value === "ALL" ? ROOMS[0] : ROOMS.filter((item) => item.floor === floor.value)[0]);
  }, [floor.value]);

  const handleRoom = (e: RoomOption) => {
    setRoom(e);
  };

  return {
    room,
    handleRoom,
    attendsData,
  };
};
