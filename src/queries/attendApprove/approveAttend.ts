import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token";
import bbeepAxios from "../../libs/axios/customAxios";
import {RoomName} from "../../types/enums/roomName";
import {cookie} from "../../utils/tokenStore";
import {notification} from "antd";
import {AxiosError} from "axios";

export const useApproveAttend = (roomName: RoomName | null) => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const queryClient = useQueryClient();

    const approveAttend = async () => {
        if (accessToken && roomName) {
            await bbeepAxios.post("/approve", {roomName});
        } else {
            await Promise.reject("권한이 없습니다.");
        }
    }

    return useMutation({
        mutationFn: approveAttend,
        onSuccess: () => {
            notification.open({message: "출석 승인 상태 변경 완료"});
            queryClient.invalidateQueries({queryKey: ["approve"]});
            queryClient.invalidateQueries({queryKey: ["attendApproveNot"]});
            queryClient.invalidateQueries({queryKey: ["approve", roomName]})
        },
        onError: (e) => {
            notification.open({
                message: "출석 승인 실패",
                description: (e as AxiosError<{ message: string }>).response?.data.message
            });
        }
    })
}
