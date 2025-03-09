import {useEffect, useState} from "react";
import {useGetExcelsQuery} from "../../queries/excel/getExcels.ts";

export const useGetExcels = (year: string, month: string) => {
  const [loading, setLoading] = useState(true);
  const { data, isLoading } = useGetExcelsQuery(year, month);
  
  useEffect(() => {
    if(isLoading) {
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
    isLoading: isLoading && loading,
  }
}