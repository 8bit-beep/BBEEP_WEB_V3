import {useEffect, useState} from "react";
import {useGetShiftsQuery} from "../../queries/shifts/getShifts.ts";

export const useGetShifts = () => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetShiftsQuery()
  
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