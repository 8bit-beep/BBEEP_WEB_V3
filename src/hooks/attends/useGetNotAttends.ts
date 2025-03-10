import { useGetNotAttendsQuery } from "../../queries/attends/getNotAttends";
import {useEffect, useState} from "react";

export const useGetNotAttends = () => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetNotAttendsQuery();
  
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
