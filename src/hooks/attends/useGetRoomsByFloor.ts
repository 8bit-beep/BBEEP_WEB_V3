import { useState } from "react";
import { Option } from "../../types/props/dropdownProps";
import { ROOMS } from "../../constants/rooms/rooms";

export const useGetRoomsByFloor = () => {
  const [floor, setFloor] = useState<Option>({ value: "ALL", name: "전체" });

  const handleFloor = (e: Option) => {
    setFloor(e);
  };

  return {
    floor,
    handleFloor,
    roomData:
      floor.value === "ALL"
        ? ROOMS
        : ROOMS.filter((item) => item.floor === floor.value),
  };
};
