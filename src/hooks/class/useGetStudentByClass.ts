import {useEffect, useState} from "react";
import {useGetStudentByAttendQuery} from "../../queries/class/getStudentByAttend.ts";
import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";

export const useGetStudentByClass = (props: StudentByAttendProps) => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetStudentByAttendQuery(props);

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
  },[isLoading]);

  return {
    data,
    isLoading : isLoading || loading,
  }
}
