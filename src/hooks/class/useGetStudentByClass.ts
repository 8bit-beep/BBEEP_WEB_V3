import {useEffect, useState} from "react";
import {useGetStudentByClassQuery} from "../../queries/class/getStudentByClass.ts";

export const useGetStudentByClass = (grade: string, cls: string) => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetStudentByClassQuery(Number(grade), Number(cls));
  
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
    isLoading : isLoading && loading,
  }
}