import { motion } from "framer-motion";

import { Card, CardContent } from "@/shared/ui/card";

function HighlightCard({ text }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
    >
      <Card className="h-full border-border/50">
        <CardContent className="p-6">
          <p className="leading-7">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default HighlightCard;
