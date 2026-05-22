import SidebarToggle from "@/shared/components/SidebarToggle";
import ThemeToggle from "@/shared/components/ThemeToggle";

import { workspaces } from "@/shared/data/workspaces";

import useWorkspaceStore from "@/app/store/workspaceStore";

function Topbar() {
  const { currentWorkspace } = useWorkspaceStore();

  const workspace = workspaces.find((item) => item.id === currentWorkspace);

  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarToggle />

        <div>
          <h2 className="text-lg font-semibold">{workspace.name}</h2>

          <p className="text-sm text-muted-foreground">
            {workspace.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Topbar;
