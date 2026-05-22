import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import DashboardPage from "@/pages/DashboardPage";
import RoadmapPage from "@/pages/RoadmapPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ArchitecturePage from "@/pages/ArchitecturePage";
import RecruiterPage from "@/pages/RecruiterPage";
import TimelinesPage from "@/pages/TimelinesPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/recruiter" element={<RecruiterPage />} />
          <Route path="/timeline" element={<TimelinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
