import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {getStoredOption} from "../../utils/getStoredOption.ts";
import {notification} from "antd";
import {AxiosError} from "axios";

export const useUpdateNotAttendStatusMutation = (status: AttendStatus, grade: number, cls: number, num: number) => {
    const queryClient = useQueryClient();

    const updateAttendStatus = async () => {
        return await bbeepAxios.patch('/students/attend-status', {
            grade,
            cls,
            num,
            status,
        });
    }

    return useMutation({
        mutationFn: updateAttendStatus,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["getNotAttends", getStoredOption("FILTER_BY")
                    ?.value || "room", getStoredOption("NOTATTEND_GRADE")
                    ?.value || "1", getStoredOption("NOTATTEND_CLS")?.value || "1", getStoredOption("NOTATTEND_ROOM")
                    ?.value || "PROJECT1"]
            })
        },
        onError: (e) => {
            notification.open({
                message: "출석 상태 변경 실패",
                description: (e as AxiosError<{ message: string }>).response?.data.message
            });
        }
    });
}
