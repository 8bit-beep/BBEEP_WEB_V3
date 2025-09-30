import {useQuery} from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import {Attend} from "../../types/attend/attend.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {cookie} from "../../utils/tokenStore.ts";
import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";

export const useGetNotAttendsQuery = (props: StudentByAttendProps) => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const endpoint =
        props.filterBy.value === "room"
            ? `/students/not-attend/room?roomName=${props.room.value}&type=${props.type.value}`
            : props.filterBy.value === "class"
                ? `/students/not-attend/class?grade=${props.grade.value}&cls=${props.cls.value}`
                : `/students/not-attend`

    const fetchData = async () => {
        const {data} = await bbeepAxios.get<Attend[]>(endpoint);
        return data as Attend[];
    };

    const {data, isLoading} = useQuery({
        queryKey: ["getNotAttends", props.filterBy.value, props.grade.value, props.cls.value, props.room.value, props.type.value],
        queryFn: fetchData,
        enabled: !!accessToken,
    });

    return {
        data,
        isLoading,
    };
};
