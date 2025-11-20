import {cookie} from "../../utils/tokenStore.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {Attend} from "../../types/attend/attend.ts";
import {useQuery} from "@tanstack/react-query";
import {AttendFilterProps} from "../../types/props/attend/attendFilterProps.ts";

export const useGetAttendsQuery = (props: AttendFilterProps) => {
    console.log("useGetAttendsQuery props:", props);
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const endpoint =
        props.filterBy.value === "room"
            ? `/students/room?room=${props.room.value}&type=${props.type.value}`
            : `/students/class?grade=${props.grade.value}&cls=${props.cls.value}&type=${props.type.value}`;

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
