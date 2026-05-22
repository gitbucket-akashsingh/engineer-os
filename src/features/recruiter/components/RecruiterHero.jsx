import { motion } from "framer-motion";

import { Button } from "@/shared/ui/button";

import { GitBranch, FileText } from "lucide-react";

function RecruiterHero({ data }) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-6"
    >
      <div className="space-y-3">
        <h1 className="text-5xl font-bold tracking-tight">{data.name}</h1>

        <h2 className="text-2xl text-primary font-medium">{data.role}</h2>

        <p className="max-w-3xl text-lg text-muted-foreground leading-8">
          {data.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <a href={data.github} target="_blank">
            <GitBranch className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href={data.resume} target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
      </div>
    </motion.section>
  );
}

export default RecruiterHero;
