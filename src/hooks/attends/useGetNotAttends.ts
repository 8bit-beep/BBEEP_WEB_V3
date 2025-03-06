import { useState } from "react";
import { Option } from "../../types/props/dropdownProps";
import { useGetNotAttendsQuery } from "../../queries/attends/getNotAttends";

export const useGetNotAttends = (isToday: boolean = false) => {
  const [type, setType] = useState<Option>({ value: "ALL", name: "전체" });
  const [floor, setFloor] = useState<Option>({ value: "1", name: "1층" });
  const notAttedsData = useGetNotAttendsQuery(isToday);

  const handleType = (e: Option) => {
    setType(e);
  };

  const handleFloor = (e: Option) => {
    setFloor(e);
  };

  

  return {
    type,
    floor,
    handleFloor,
    handleType,
    notAttedsData
  }
};
