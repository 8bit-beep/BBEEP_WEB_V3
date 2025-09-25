import { useGetNotAttendsQuery } from "../../queries/attends/getNotAttends";
import {useEffect, useState} from "react";
import {StudentByAttendProps} from "../../types/props/studentByAttendProps.ts";

export const useGetNotAttends = (props: StudentByAttendProps) => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetNotAttendsQuery(props);

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
    isLoading: isLoading || loading,
  }
};
