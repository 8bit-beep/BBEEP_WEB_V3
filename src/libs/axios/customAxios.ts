import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "../../constants/token/token";
import { BaseResponse } from "../../types/response/baseResponse";
import { TokenResponse } from "../../types/response/tokenResponse";
import { cookie } from "../../utils/tokenStore";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const bbeepAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: "application/json, text/plain, */*, multipart/form-data",
    },
    withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

bbeepAxios.interceptors.request.use(
    async (config) => {
        const token = cookie.get(ACCESS_TOKEN_KEY);
        if (token) {
            config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
        }

        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        } else {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

bbeepAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        if (originalRequest.data instanceof FormData) {
            originalRequest.headers["Content-Type"] = "multipart/form-data";
        } else {
            originalRequest.headers["Content-Type"] = "application/json";
        }
        if (originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = cookie.get(REFRESH_TOKEN_KEY);

            if (refreshToken) {
                if (!isRefreshing) {
                    isRefreshing = true;

                    try {
                        const { data } = await axios.post<
                            BaseResponse<TokenResponse>
                        >(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
                            refreshToken,
                        });

                        const newAccessToken = data.data.data.accessToken;
                        const newRefreshToken = data.data.data.refreshToken;

                        cookie.set(ACCESS_TOKEN_KEY, newAccessToken);
                        cookie.set(REFRESH_TOKEN_KEY, newRefreshToken);

                        onRefreshed(newAccessToken);

                        originalRequest.headers[
                            REQUEST_TOKEN_KEY
                        ] = `Bearer ${newAccessToken}`;
                        return bbeepAxios(originalRequest);
                    } catch (refreshError) {
                        cookie.remove(ACCESS_TOKEN_KEY);
                        cookie.remove(REFRESH_TOKEN_KEY);
                        return Promise.reject(refreshError);
                    } finally {
                        isRefreshing = false;
                    }
                }

                return new Promise((resolve) => {
                    addRefreshSubscriber((newToken: string) => {
                        originalRequest.headers[
                            REQUEST_TOKEN_KEY
                        ] = `Bearer ${newToken}`;
                        resolve(bbeepAxios(originalRequest));
                    });
                });
            } else {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default bbeepAxios;
