import { useQuery } from "@tanstack/react-query";
import bbeepAxios from "../../libs/axios/customAxios";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.ts";
import { BaseResponse } from "../../types/response/baseResponse.ts";
import { User } from "../../types/user/user.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cookie } from "../../utils/tokenStore.ts";

export const useGetme = () => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const navigate = useNavigate();

    // if(!accessToken) {
    //   navigate('/login')
    // }

    const [me, setMe] = useState<User | null>(null);

    const fetchData = async () => {
        const { data } = await bbeepAxios.get<BaseResponse<User>>(`/users/me`);
        setMe(data.data);
        if (
            data.data.role === "STUDENT" &&
            data.data.username !== "김태우" &&
            data.data.username !== "권수현"
        ) {
            navigate(`/forbidden`);
        }
        return data.data;
    };
    useQuery({
        queryKey: ["me", accessToken],
        queryFn: fetchData,
        enabled: !!accessToken,
    });

    const initUser = () => {
        setMe(null);
    };

    return {
        me,
        initUser,
    };
};
