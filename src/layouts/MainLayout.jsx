import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/components/Sidebar";
import Topbar from "@/shared/components/Topbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
