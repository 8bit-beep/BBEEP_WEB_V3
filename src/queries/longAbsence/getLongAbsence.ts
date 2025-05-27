import { useQuery } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token"
import bbeepAxios from "../../libs/axios/customAxios";
import { LongAbsenceItem } from "../../types/longAbsence/longAbsenceItem";
import { cookie } from "../../utils/tokenStore"

export const useGetLongAbsenceQuery = () => {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    const { data } = await bbeepAxios.get<LongAbsenceItem[]>("/long-absences");
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["longAbsence"],
    queryFn: fetchData,
    enabled: !!accessToken
  });

  return {
    data,
    isLoading
  }
}