import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { workspaces } from "@/shared/data/workspaces";

import useWorkspaceStore from "@/app/store/workspaceStore";

function WorkspaceSwitcher() {
  const { currentWorkspace, setWorkspace } = useWorkspaceStore();

  return (
    <Select value={currentWorkspace} onValueChange={setWorkspace}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {workspaces.map((workspace) => (
          <SelectItem key={workspace.id} value={workspace.id}>
            {workspace.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default WorkspaceSwitcher;
