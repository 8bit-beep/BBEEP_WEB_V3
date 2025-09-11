import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../../constants/token/token.ts";
import { TokenResponse } from "../../types/response/tokenResponse.ts";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { cookie } from "../../utils/tokenStore.ts";
import { BaseResponse } from "../../types/response/baseResponse.ts";

export const useAuthMutation = (code: string | null) => {
    const navigate = useNavigate();

    const mutationFn = async () => {
        if (!code) {
            await Promise.reject("코드가 없습니다.");
        }
        const { data } = await axios.post<BaseResponse<TokenResponse>>(
            `${import.meta.env.VITE_API_URL}/dauth/login`,
            { code }
        );

        cookie.set(ACCESS_TOKEN_KEY, data.data.accessToken);
        cookie.set(REFRESH_TOKEN_KEY, data.data.refreshToken);

        notification.open({
            message: "환영합니다!",
            description: "로그인 되었습니다.",
        });
        console.log(ACCESS_TOKEN_KEY);
        console.log(data);
        console.log(data.data);
        console.log(data.data.accessToken);
    };

    const { isError, isPending, mutate } = useMutation({
        mutationFn,
        onSuccess: () => {
            navigate("/");
        },
    });

    return {
        isError,
        isPending,
        mutate,
    };
};
