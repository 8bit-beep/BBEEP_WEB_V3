import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";
import {cookie} from "../../utils/tokenStore.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {Attend} from "../../types/attend/attend.ts";
import {useQuery} from "@tanstack/react-query";

export const useGetAttendsQuery = (props: StudentByAttendProps) => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const endpoint =
        props.filterBy.value === "room"
            ? `/students/attend/room?roomName=${props.room.value}&type=${props.type.value}`
            : `/students/attend/class?grade=${props.grade.value}&cls=${props.cls.value}`

    const fetchData = async () => {
        const {data} = await bbeepAxios.get<Attend[]>(endpoint);
        return data as Attend[];
    }

    const {data, isLoading} = useQuery({
        queryKey: ["getAttends", props.filterBy.value, props.grade.value, props.cls.value, props.room.value, props.type.value],
        queryFn: fetchData,
        enabled: !!accessToken,
    });

    return {
        data,
        isLoading
    }
}
