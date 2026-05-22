import { create } from "zustand";

const useSidebarStore = create((set) => ({
  collapsed: false,

  toggleSidebar: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),
}));

export default useSidebarStore;
