import {useEffect, useState} from "react";
import {useGetAttendsQuery} from "../../queries/attends/getAttends.ts";
import {AttendFilterProps} from "../../types/props/attend/attendFilterProps.ts";

/** 출석 상태 알아보는 곳 (전체)*/
export const useGetAttends = (props: AttendFilterProps) => {
    const [loading, setLoading] = useState(false);
    const {data, isLoading} = useGetAttendsQuery(props);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
            return;
        }

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [isLoading]);

    return {
        data,
        isLoading: isLoading || loading,
    }
}
