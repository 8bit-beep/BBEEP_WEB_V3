import {useEffect, useState} from "react";
import {RoomName} from "../../types/enums/roomName.ts";
import {useGetAttendsByRoomQuery} from "../../queries/attends/getAttendsByRoom.ts";

export const useGetAttendsByRoom = (room: RoomName | null) => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, refetch } = useGetAttendsByRoomQuery(room);
  
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
      return;
    }
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [isLoading]);
  
  return {
    data,
    isLoading: isLoading || loading,
    refetch,
  }
}