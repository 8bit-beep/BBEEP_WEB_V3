import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { BaseResponse } from "../../types/response/baseResponse";
import { Shift } from "../../types/shift/shift";

export const useGetShiftsQuery = () => {
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<BaseResponse<Shift[]>>("/shifts");
    return data.data;
  };

  const { data } = useQuery({
    queryKey: ["getShifts"],
    queryFn: fetchData,
  });

  return data;
};
