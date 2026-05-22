import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

function ArchitectureCard({ architecture }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="h-full border-border/50">
        <CardHeader>
          <CardTitle>{architecture.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground leading-6">
            {architecture.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Technologies</h4>

            <div className="flex flex-wrap gap-2">
              {architecture.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* SECTIONS */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Core Systems</h4>

            <div className="space-y-2">
              {architecture.sections.map((section) => (
                <div
                  key={section}
                  className="
                    rounded-lg border px-3 py-2
                    text-sm
                  "
                >
                  {section}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ArchitectureCard;
