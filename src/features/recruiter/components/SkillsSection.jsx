import { Badge } from "@/shared/ui/badge";

function SkillsSection({ skills }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Core Skills</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
