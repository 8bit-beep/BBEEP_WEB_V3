import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token"
import {cookie} from "../../utils/tokenStore"
import bbeepAxios from "../../libs/axios/customAxios";
import {notification} from "antd";
import {AxiosError} from "axios";
import {RegisterLongAbsence} from "../../types/longAbsence/registerLongAbsence.ts";

export const useCreateLongAbsence = () => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const queryClient = useQueryClient();


    const createData = async (data: RegisterLongAbsence) => {
        if (!accessToken) {
            await Promise.reject();
        }
        if (data.num > 0 && data.startDate && data.endDate && new Date(data.startDate) < new Date(data.endDate) && data.reason.trim().length > 0) {
            await bbeepAxios.post("/long-absences", data);
        } else {
            notification.open({
                message: "장기 결석자 등록 실패",
                description: "장기 결석자 등록 정보가 모두 기입되었는지, 장기 결석 시작일이 종료일과 같거나 더 늦지 않는지 확인해주세요."
            })
            await Promise.reject();
        }
    }

    return useMutation({
        mutationFn: createData,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["longAbsence"]});
        },
        onError: (e) => {
            notification.open({
                message: "장기 결석자 등록 실패",
                description: (e as AxiosError<{ message: string }>).response?.data.message
            });
        }
    })
}
