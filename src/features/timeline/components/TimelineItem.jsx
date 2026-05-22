import { motion } from "framer-motion";

import { Badge } from "@/shared/ui/badge";

import { timelineBadgeStyles } from "@/shared/utils/timelineBadgeStyles";

function TimelineItem({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      className="
        relative rounded-xl border p-5
        bg-background/50 backdrop-blur
      "
    >
      {/* DOT */}
      <div
        className="
          absolute -left-[29px] top-6
          h-4 w-4 rounded-full
          bg-primary border-4 border-background
        "
      />

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold">{item.title}</h3>

          <Badge variant="outline" className={timelineBadgeStyles[item.type]}>
            {item.type.replace("_", " ")}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-6">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
