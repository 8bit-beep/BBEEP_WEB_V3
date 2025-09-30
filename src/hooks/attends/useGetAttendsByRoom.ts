import {useEffect, useState} from "react";
import {RoomName} from "../../types/enums/roomName.ts";
import {cookie} from "../../utils/tokenStore.ts";
import {ACCESS_TOKEN_KEY} from "../../constants/token/token.ts";
import bbeepAxios from "../../libs/axios/customAxios.ts";
import {Attend} from "../../types/attend/attend.ts";
import {notification} from "antd";
import {AttendStatus} from "../../types/enums/AttendStatus.ts";

/**현재 출석 됐는지 안됐는지 보는 곳*/
export const useGetAttendsByRoom = (room: RoomName | null, type: AttendStatus) => {
    const [loading, setLoading] = useState(false);
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const [data, setData] = useState<Attend[]>([]);

    const fetchData = async () => {
        if (!accessToken || !room || type) return;
        try {
            setLoading(true);
            const {data} = await bbeepAxios.get<Attend[]>(`/students/room?room=${room}&type=${type}`);
            if (data) {
                setData(data);
            }
        } catch {
            notification.open({message: "출석 정보를 가져오는데 실패했습니다.", description: "네트워크 에러"});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [room, type]);

    return {
        data,
        isLoading: loading,
        refetch: fetchData,
    }
}
