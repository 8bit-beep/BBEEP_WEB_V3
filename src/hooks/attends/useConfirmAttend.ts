import { useState, useEffect } from "react";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {notification} from "antd";
import {ConfirmAttend} from "../../types/attend/confirmAttend.ts";

export const useConfirmAttend = () => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);
  const [data, setData] = useState<ConfirmAttend[]>([])
  
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;
      
      const timeRanges = [
        { start: 16 * 60 + 20, end: 16 * 60 + 50, code: 8 },
        { start: 19 * 60 + 10, end: 19 * 60 + 30, code: 10 },
        { start: 20 * 60 + 40, end: 21 * 60 + 10, code: 11 },
      ];
      
      const activeRange = timeRanges.find(({ start, end }) => currentTime >= start && currentTime <= end);
      if (activeRange) {
        setButtonEnabled(true);
        setTime(activeRange.code);
      } else {
        setButtonEnabled(false);
        setTime(0);
      }
    };
    
    checkTime();
    const interval = setInterval(checkTime, 1000 * 60);
    
    return () => clearInterval(interval);
  }, []);
  
  const confirmAttend = async () => {
    if(loading || time === 0) return;
    try{
      setLoading(true);
      const { data } = await bbeepAxios.get<ConfirmAttend[]>(`/teacher/attends/${time}`);
      setData(data);
    }catch{
      notification.open({message: "출석 확인 실패", description: "나중에 다시 시도해주세요."});
    }finally {
      setLoading(false)
    }
  }
  
  return {
    isButtonEnabled: isButtonEnabled || loading,
    confirmAttend,
    data
  };
};
