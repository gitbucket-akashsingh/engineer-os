import { Badge } from "@/shared/ui/badge";

function StatusBadge({ status }) {
  const statusStyles = {
    COMPLETED: "bg-green-500/15 text-green-500 border-green-500/20",

    IN_PROGRESS: "bg-blue-500/15 text-blue-500 border-blue-500/20",

    PENDING: "bg-yellow-500/15 text-yellow-500 border-yellow-500/20",

    BLOCKED: "bg-red-500/15 text-red-500 border-red-500/20",
  };

  return (
    <Badge variant="outline" className={statusStyles[status]}>
      {status.replace("_", " ")}
    </Badge>
  );
}

export default StatusBadge;
