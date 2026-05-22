import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

import { Progress } from "@/shared/ui/progress";

import StatusBadge from "./StatusBadge";

function RoadmapPhase({ phase }) {
  return (
    <AccordionItem value={String(phase.id)} className="border rounded-xl px-4">
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-3 text-left w-full">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{phase.title}</h2>

            <StatusBadge status={phase.status} />
          </div>

          <p className="text-sm text-muted-foreground">{phase.description}</p>

          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{phase.progress}%</span>
            </div>

            <Progress value={phase.progress} />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <div className="space-y-3 pb-4">
          {phase.steps.map((step) => (
            <div
              key={step.title}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <span className="text-sm">{step.title}</span>

              <StatusBadge status={step.status} />
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default RoadmapPhase;
