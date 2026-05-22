import StatsCard from "@/features/dashboard/components/StatsCard";
import SectionCard from "@/features/dashboard/components/SectionCard";
import { motion } from "framer-motion";
import useWorkspaceStore from "@/app/store/workspaceStore";

import { workspaces } from "@/shared/data/workspaces";

import { fadeInUp, staggerContainer } from "@/shared/utils/motion";
import {
  dashboardStats,
  currentSprint,
  recentActivity,
} from "@/shared/data/dashboardData";

function DashboardPage() {
  const { currentWorkspace } = useWorkspaceStore();

  const workspace = workspaces.find((item) => item.id === currentWorkspace);
  return (
    <motion.div
      className="space-y-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.section variants={fadeInUp} className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{workspace.name}</h1>

        <p className="text-muted-foreground text-lg">{workspace.description}</p>
      </motion.section>

      {/* STATS */}
      {/* <motion.section
        variants={fadeInUp}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {dashboardStats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </motion.section> */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Frontend Progress"
          value={`${workspace.stats.frontend}%`}
          description="Frontend architecture progress"
        />

        <StatsCard
          title="Backend Progress"
          value={`${workspace.stats.backend}%`}
          description="Backend systems progress"
        />

        <StatsCard
          title="Infrastructure"
          value={`${workspace.stats.infrastructure}%`}
          description="Infrastructure and CI/CD"
        />

        <StatsCard
          title="Production Readiness"
          value="24%"
          description="Security and scaling remaining"
        />
      </section>

      {/* MAIN GRID */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* CURRENT SPRINT */}
        <SectionCard title="Current Sprint">
          <div className="space-y-3">
            {currentSprint.map((item) => (
              <div key={item} className="rounded-lg border p-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* RECENT ACTIVITY */}
        <SectionCard title="Recent Activity">
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item} className="rounded-lg border p-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      {/* RECRUITER SUMMARY */}
      <SectionCard title="Recruiter Summary">
        <div className="space-y-4 text-sm text-muted-foreground leading-7">
          <p>
            EngineerOS is a scalable engineering execution platform designed to
            track product architecture, development phases, CI/CD workflows,
            infrastructure planning, and production readiness.
          </p>

          <p>
            Current focus areas include frontend architecture, system design
            visualization, scalable routing systems, reusable UI infrastructure,
            and roadmap execution.
          </p>
        </div>
      </SectionCard>
    </motion.div>
  );
}

export default DashboardPage;
