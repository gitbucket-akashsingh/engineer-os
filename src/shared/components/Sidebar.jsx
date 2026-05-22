import { NavLink } from "react-router-dom";

import { sidebarLinks } from "@/shared/constants/sidebarLinks";

import WorkspaceSwitcher from "./WorkspaceSwitcher";

import useSidebarStore from "@/app/store/sidebarStore";
import { motion } from "framer-motion";

function Sidebar() {
  const { collapsed } = useSidebarStore();

  return (
    <motion.aside
      layout
      className={`
        hidden md:flex flex-col border-r bg-background
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* HEADER */}
      <div className="h-16 border-b flex items-center justify-center px-4">
        {collapsed ? (
          <h1 className="text-xl font-bold">E</h1>
        ) : (
          <h1 className="text-xl font-bold tracking-tight">EngineerOS</h1>
        )}
      </div>

      {/* WORKSPACE */}
      {!collapsed && (
        <div className="p-4 border-b">
          <WorkspaceSwitcher />
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-lg px-3 py-2
                transition-all duration-200
                hover:bg-accent hover:text-accent-foreground
                ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }
              `
              }
            >
              <Icon size={18} />

              {!collapsed && <span>{link.title}</span>}
            </NavLink>
          );
        })}
      </nav>
    </motion.aside>
  );
}

export default Sidebar;
