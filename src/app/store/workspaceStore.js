import { create } from "zustand";

const useWorkspaceStore = create((set) => ({
  currentWorkspace: "allride",

  setWorkspace: (workspaceId) =>
    set({
      currentWorkspace: workspaceId,
    }),
}));

export default useWorkspaceStore;
