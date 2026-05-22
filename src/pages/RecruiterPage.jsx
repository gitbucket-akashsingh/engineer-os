import { motion } from "framer-motion";

import RecruiterHero from "@/features/recruiter/components/RecruiterHero";

import HighlightCard from "@/features/recruiter/components/HighlightCard";

import SkillsSection from "@/features/recruiter/components/SkillsSection";

import { recruiterData } from "@/shared/data/recruiterData";

import { fadeInUp, staggerContainer } from "@/shared/utils/motion";

function RecruiterPage() {
  return (
    <motion.div
      className="space-y-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.div variants={fadeInUp}>
        <RecruiterHero data={recruiterData} />
      </motion.div>

      {/* HIGHLIGHTS */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Engineering Highlights</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recruiterData.highlights.map((highlight) => (
            <HighlightCard key={highlight} text={highlight} />
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.div variants={fadeInUp}>
        <SkillsSection skills={recruiterData.skills} />
      </motion.div>
    </motion.div>
  );
}

export default RecruiterPage;
