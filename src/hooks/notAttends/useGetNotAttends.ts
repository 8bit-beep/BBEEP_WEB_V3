import {useEffect, useState} from "react";
import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";
import {useGetNotAttendsQuery} from "../../queries/notAttends/getNotAttends.ts";

/** 출석 안된 학생 조회입니다*/
export const useGetNotAttends = (props: StudentByAttendProps) => {
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
