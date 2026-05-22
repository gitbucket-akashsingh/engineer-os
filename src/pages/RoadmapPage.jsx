import { Accordion } from "@/shared/ui/accordion";

import RoadmapPhase from "@/features/roadmap/components/RoadmapPhase";

import { roadmapData } from "@/shared/data/roadmapData";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/utils/motion";

function RoadmapPage() {
  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Engineering Roadmap
        </h1>

        <p className="text-muted-foreground text-lg">
          Track execution phases, development progress, and production
          readiness.
        </p>
      </section>

      {/* ROADMAP */}
      <Accordion type="single" collapsible className="space-y-4">
        {roadmapData.map((phase) => (
          <RoadmapPhase key={phase.id} phase={phase} />
        ))}
      </Accordion>
    </motion.div>
  );
}

export default RoadmapPage;
