import {useSearchParams} from "react-router-dom";
import {useAuthMutation} from "../../queries/auth/auth.ts";
import {useEffect} from "react";

/** 로그인하는 곳*/
export const useAuth = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const {isError, isPending, mutate} = useAuthMutation(code);

    useEffect(() => {
        mutate();
    }, [code]);

    return {
        isError,
        isPending,
    }
}
