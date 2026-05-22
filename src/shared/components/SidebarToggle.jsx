import { PanelLeftClose, PanelLeft } from "lucide-react";

import { Button } from "@/shared/ui/button";

import useSidebarStore from "@/app/store/sidebarStore";

function SidebarToggle() {
  const { collapsed, toggleSidebar } = useSidebarStore();

  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
      {collapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
    </Button>
  );
}

export default SidebarToggle;
