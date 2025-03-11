import { create } from "zustand";
import { CodeCertified } from "../../types/store/codeCertified";

export const useCodeCertifiedStore = create<CodeCertified>((set) => ({
  isCodeCertified: false,
  setIsCodeCertified: (isCodeCertified: boolean) => set({ isCodeCertified }),
}));
