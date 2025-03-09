import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { Shift } from "../../types/shift/shift";
import {PageResponse} from "../../types/response/pageResponse.ts";

export const useGetShiftsQuery = () => {
  const fetchData = async () => {
    const { data } = await bbeepAxios.get<PageResponse<Shift>>("/shifts");
    return data.content;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getShifts"],
    queryFn: fetchData,
  });

  return {
    data,
    isLoading,
  };
};
