import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

function SectionCard({ title, children }) {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default SectionCard;
