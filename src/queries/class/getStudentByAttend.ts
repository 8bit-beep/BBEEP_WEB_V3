import bbeepAxios from "../../libs/axios/customAxios.ts";
import {Attend} from "../../types/attend/attend.ts";
import {useQuery} from "@tanstack/react-query";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import {cookie} from "../../utils/tokenStore.ts";
import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";

export const useGetStudentByAttendQuery = (props: StudentByAttendProps) => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);

    const endpoint =
        props.filterBy.value === "ROOM"
            ? `/students/room/room?room=${props.room.value}&type=${props.type.value}`
                : `/students/room/class?grade=${Number(props.grade.value)}&cls=${Number(props.cls.value)}`;

    const fetchData = async () => {
        const {data} = await bbeepAxios.get<Attend[]>(endpoint);
        return data;
    }

    const {data, isLoading} = useQuery({
        queryKey: [
            "getStudentByAttend",
            props.filterBy.value,
            props.room.value,
            props.grade.value,
            props.cls.value,
            props.type.value,
        ],
        queryFn: fetchData,
        enabled: !!accessToken,
    });

    return {
        data,
        isLoading,
    }
}
