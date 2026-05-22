import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { motion } from "framer-motion";
function StatsCard({ title, value, description }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="text-3xl font-bold">{value}</div>

          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default StatsCard;
