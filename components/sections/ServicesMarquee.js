const items = [
  "Brand identity design",
  "Web & mobile",
  "Custom tools",
  "UI/UX",
  "Performance",
  "Strategy",
];

function MarqueeTrack({ hidden }) {
  return (
    <span
      className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-cocoyam/30"
      aria-hidden={hidden}
    >
      {items.map((label) => (
        <span key={label} className="flex items-center gap-10">
          <span>{label}</span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-cocoyam-light" aria-hidden />
        </span>
      ))}
    </span>
  );
}

export default function ServicesMarquee() {
  return (
    <section
      className="relative z-20 overflow-hidden bg-white py-5 text-cocoyam"
      aria-label="Services we offer"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
        <MarqueeTrack />
        <MarqueeTrack hidden />
      </div>
    </section>
  );
}
