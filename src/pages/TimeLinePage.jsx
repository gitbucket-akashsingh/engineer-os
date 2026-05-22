import { motion } from "framer-motion";

import TimelineSection from "@/features/timeline/components/TimelineSection";

import { timelineData } from "@/shared/data/timelineData";

import { fadeInUp, staggerContainer } from "@/shared/utils/motion";

function TimelinePage() {
  return (
    <motion.div
      className="space-y-10"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* HEADER */}
      <motion.section variants={fadeInUp} className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Engineering Timeline
        </h1>

        <p className="text-muted-foreground text-lg">
          Track engineering milestones, architecture evolution, and execution
          history.
        </p>
      </motion.section>

      {/* TIMELINE */}
      <motion.div variants={fadeInUp} className="space-y-12">
        {timelineData.map((section) => (
          <TimelineSection key={section.month} section={section} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TimelinePage;
