import { useGetNotAttendsQuery } from "../../queries/attends/getNotAttends";
import {useEffect, useState} from "react";
import {Option} from "../../types/props/dropdownProps.ts";

export const useGetNotAttends = (filterBy: Option, grade: Option, cls: Option, room: Option) => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetNotAttendsQuery(filterBy, grade, cls, room);
  
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
