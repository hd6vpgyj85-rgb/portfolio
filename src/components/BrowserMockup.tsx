export default function BrowserMockup({
  name,
  accent = "from-neutral-700 to-neutral-900",
}: {
  name: string;
  accent?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-neutral-900">
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
      </div>
      <div
        className={`flex h-48 items-center justify-center bg-gradient-to-br ${accent} px-6 sm:h-56`}
      >
        <span className="text-center text-lg font-medium tracking-tight text-neutral-200 sm:text-xl">
          {name}
        </span>
      </div>
    </div>
  );
}
