import {useQuery} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token"
import bbeepAxios from "../../libs/axios/customAxios";
import {Room} from "../../types/attend/room";
import {cookie} from "../../utils/tokenStore"

export const useGetAttendApproveNotQuery = () => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);

    const fetchData = async () => {
        const {data} = await bbeepAxios.get<Room[]>("/approve/not");
        return data;
    }

    const {data, isLoading} = useQuery({
        queryKey: ["attendApproveNot"],
        queryFn: fetchData,
        enabled: !!accessToken,
    });

    return {
        data,
        isLoading
    }
}
