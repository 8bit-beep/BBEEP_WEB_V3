import {useQuery} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token"
import bbeepAxios from "../../libs/axios/customAxios";
import {cookie} from "../../utils/tokenStore"
import { ApproveItem } from "../../types/approve/approveItem";

export const useGetAttendApproveNotQuery = () => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);

    const fetchData = async () => {
        const {data} = await bbeepAxios.get<ApproveItem[]>("/approve/not");
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
