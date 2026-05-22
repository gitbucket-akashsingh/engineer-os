import {
  LayoutDashboard,
  GitBranch,
  FolderKanban,
  Network,
  // Briefcase,
} from "lucide-react";
import { Timeline } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Roadmap",
    path: "/roadmap",
    icon: GitBranch,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Architecture",
    path: "/architecture",
    icon: Network,
  },
  // {
  //   title: "Recruiter",
  //   path: "/recruiter",
  //   icon: Briefcase,
  // },
  {
    title: "Timeline",
    path: "/timeline",
    icon: Timeline,
  },
  {
    title: "Recruiter Mode",
    path: "/recruiter",
    icon: BriefcaseBusiness,
  },
];
