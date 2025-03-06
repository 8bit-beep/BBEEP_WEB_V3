import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";

export const useGetme = () => {
  const fetchData = async () => {
    try {
      const { data } = await bbeepAxios.get(`/users/me`);
      return data.data[0];
    } catch (e) {
      console.log(e);
    }
  };
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: fetchData,
  });

  return data;
};
