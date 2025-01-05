import { create } from "zustand";
import { LoadingState } from "../../types/store/loadingState";

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));
