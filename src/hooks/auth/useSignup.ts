import axios from "axios";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { SignupForm } from "../../types/auth/signupForm";
import { useErrorStore } from "../../store/global/useErrorStore";

const useSignup = () => {
  const { loading, setLoading } = useLoadingStore();
  const { setError } = useErrorStore();

  const onSubmit = async (signupForm: SignupForm) => {
    if (loading) return;
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        signupForm
      );
      return true;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return onSubmit;
};

export default useSignup;
