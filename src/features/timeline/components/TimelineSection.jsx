import TimelineItem from "./TimelineItem";

function TimelineSection({ section }) {
  return (
    <section className="relative pl-10">
      {/* VERTICAL LINE */}
      <div
        className="
          absolute left-4 top-0 bottom-0
          w-px bg-border
        "
      />

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">{section.month}</h2>
        </div>

        <div className="space-y-6">
          {section.items.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
