import {useMutation} from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {AxiosError} from "axios";
import {notification} from "antd";

export const useUpdateAttendStatusMutation = (
    status: string, grade: number, cls: number, num: number, refetch: () => Promise<void>) => {

    const updateAttendStatus = async () => {
        await bbeepAxios.patch('/students/attend-status', {
            grade,
            cls,
            num,
            status,
        });
        await refetch();
    }

    return useMutation({
        mutationFn: updateAttendStatus,
        onError: (e) => {
            notification.open({
                message: "출석 상태 변경 실패",
                description: (e as AxiosError<{ message: string }>).response?.data.message
            });
        }
    });
}
