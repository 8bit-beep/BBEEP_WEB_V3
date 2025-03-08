import {create} from "zustand";
import {SidebarDataState} from "../../types/store/sidebarDataState.ts";

export const useSidebarDataStore = create<SidebarDataState>(set => ({
  sidebarData: null,
  setSidebarData: (sidebarData) => set({ sidebarData }),
}))