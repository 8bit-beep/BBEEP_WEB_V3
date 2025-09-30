import {useEffect, useState} from "react";
import {useGetNotAttendsQuery} from "../../queries/notAttends/getNotAttends.ts";
import {AttendFilterProps} from "../../types/props/attend/attendFilterProps.ts";

/** 출석 안된 학생 조회입니다*/
export const useGetNotAttends = (props: AttendFilterProps) => {
    const [loading, setLoading] = useState(false);
    const {data, isLoading} = useGetNotAttendsQuery(props);

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
};
