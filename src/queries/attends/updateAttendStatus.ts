import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {RoomName} from "../../types/enums/roomName.ts";
import {AxiosError} from "axios";
import {notification} from "antd";

export const useUpdateAttendStatusMutation = (
    status: AttendStatus, grade: number, cls: number, number: number, room: RoomName) => {
    const queryClient = useQueryClient();

    const updateAttendStatus = async () => {
        return await bbeepAxios.patch('/students/attend-status', {
            grade,
            cls,
            number,
            status,
        });
    }

    return useMutation({
        mutationFn: updateAttendStatus,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["getAttendsByRoom", room]})
        },
        onError: (e) => {
            notification.open({
                message: "출석 상태 변경 실패",
                description: (e as AxiosError<{ message: string }>).response?.data.message
            });
        }
    });
}
